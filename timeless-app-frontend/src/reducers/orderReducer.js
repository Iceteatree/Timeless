// Import the relevant action types needed for this reducer
import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from '../actions/types';

// Set the inital state of these variables to the following.
const initialState = {
    orders: [],
    loading: false
}

// This reducer function handles the orders within our application.
export default function orderReducer(state=initialState, action){
    // Setting up a switch statement if the action type is any of these different cases then do the following.
    switch(action.type){
        // In this case we use the current state with the spread operator and then set the orders variable to the payload of the action. We then set loading to false.
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload,
                loading: false
            }
        // In this case we use the current state with the spread operator and then set the orders to receive the new order from the payload and then add it to the orders array here.
        case CHECKOUT:
            return{
                ...state,
                orders: [action.payload, ...state.orders]
            }
        
        // In this case we set the loading to true.
        case ORDERS_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}