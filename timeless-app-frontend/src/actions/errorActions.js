import { GET_ERRORS, CLEAR_ERRORS } from './types';

// This function will take a message, status and id and will return them as a payload with the type GET_ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    }
}

// This function clears the errors by sending the type as CLEAR_ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}