// Import these action types from the actions types folder.
import { 
    GET_CART, 
    ADD_TO_CART, 
    DELETE_FROM_CART, 
    CART_LOADING } from '../actions/types';

// Set the intial state of these variables to these values.
const initialState = {
    cart: null,
    loading: false
}

// This reducer function is related to the cart of the user.
export default function cartReducer(state=initialState, action){
    // Setting up a switch statement if the action type is any of these different cases then do the following.
    switch(action.type){
        // In this case use the current state with the spread operator then change the value of cart to the payload of the action and finally set loading to false. 
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false
            }

        // In this case use the current state with the spread operator then set the cart to the action of the payload
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }

        // In this case use the current state with the spread operator then set the cart to the action of the payload
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: action.payload
            }
        // In this case use the current state with the spread operator then set loading to true.
        case CART_LOADING:
            return {
                ...state, 
                loading: true
            }

        default:
            return state;
    }
}