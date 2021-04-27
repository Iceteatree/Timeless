// import axios.
import axios from 'axios';
import { returnErrors } from './errorActions';
// Importing the types needed for the authentication actions.
import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from './types';

// This function sets the type as USER_LOADING to indicate that the user is currently loading.
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });

    // We use axios to make our GET request to the endpoint /api/user along with the token from our tokenconfig.
    axios.get('/api/user', tokenConfig(getState))
        // Then with our response we get the results and set the payload as the data fetched from the backend. We also set our type to User_loaded since we have succesfully loaded the user.
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        // Any errors will trigger the returnErrors function and then set the type to Auth_error
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

// Register takes our name email and password from the frontend and then passes the JSON version to our backend to be used.
export const register = ({name, email, password}) => dispatch => {
    // Setting our header to application/json for our authentication
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Turning our name email and password to JSON items.
    const body = JSON.stringify({name, email, password});

    // Using axios to make a post request to our register endpoint along with body and our config. If it sends a response then we set the response data to be our payload and then set our type to Register_Success. If it fails then we use the returnErrors function and set our type to Register_fail.
    axios.post('/api/register',body,config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

// Login function, similar to the register function except we only get email and password and then hits the endpoint for the login.
export const login = ({email, password}) => dispatch => {
    // Headers required for authentication
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //email and password made into JSON then passed into a body variable.
    const body = JSON.stringify({email, password});

    // Axios post request to login endpoint passing along body and config. If succesful we get a response and set the type to Login_success and then set the results to payload.If it fails then we use the returnErrors function and set our type to Login_fail
    axios.post('/api/login',body,config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .then(alert("You have been logged in"))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}
// logout user function just sets the type to Logout_success
export const logout = () => {
    alert("You have been logged out");
    return {
        type: LOGOUT_SUCCESS
    }
}


// Setup config/headers and token
export const tokenConfig = getState => {
    //Get token from local storage
    const token = getState().auth.token;

    // Headers for authentication
    const config = {
        headers:{
            "Content-type": "application/json",
        }
    }
    // If token exist then set the headers in our config to our token from our local storage
    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;
}