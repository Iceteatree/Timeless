// Import all the types we need for authentication from the actions folder
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

// Set up an initial state. Token is retrieved from local storage. Setting the initial values to false or null.
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

// Create a function  that checks each action type and makes changes if applicable
export default function authReducer(state=initialState, action){
    // Switch statement(lots of if statements) If the action type is the following cases.
    switch(action.type){
        // If this is the type we can say that the user isLoading to true
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        // If this is the case, set the isLoading to fale and we also set isAuthenticated to true. We then set the user as the payload we received from the actions file.
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        // In these cases we should set the token we received to the token received in local storage. We then set then set the isAuthenticated to true and the isLoading to false.
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        // In these cases we remove the token from local storage and then set its state to nukk, We then reset user, isAuthenticated and is loading back to their default false states.
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}