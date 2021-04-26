// Import the action types we need for this reducer.
import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

// Setting the initial state of our variables.
const initialState = {
    msg: {},
    status: null,
    id: null
}

// This reducer is meant to manage the errors of the application.
export default function errorReducer(state=initialState, action){
    // Switch statement. If action type equals any of these cases then do the folllowing.
    switch(action.type){
        // In this case then set the msg, status and id to the values we received from the action payload.
        case GET_ERRORS:
            return{
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        
        // In this case then set the values all back to their default values.
        case CLEAR_ERRORS:
            return{
                msg: {},
                status: null,
                id: null
            };
            
        default:
            return state;
    }
}