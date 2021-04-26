// Import axios dependency
import axios from 'axios';
import { returnErrors } from './errorActions';
// Import the types that we need to use for the item actions.
import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from './types';

// This function gets the orders from our backend.
export const getOrders = (id) => dispatch => {
    // This function firs sets the orders as loading.
    dispatch(setOrdersLoading());
    // We then uses axios to make a get request with the id of the user received to use it as a param at the endpoint. We then set the payload as data received and then set the type to Get_orders as a response if succesful.
    axios.get(`/api/order/${id}`)
        .then(res => dispatch({
            type: GET_ORDERS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// This function is used to place an order. It receives two parameters from the components which are the id of the user and the source.
// The source is generated from the stripe checkout functions.
export const checkout = (id, source) => dispatch => {
    // We then use axios to make a post request to our api endpoint with our id as a param and the source as a request body. If succesful then we set the type to Checkout and the payload to the response data.
    axios.post(`/api/order/${id}`, {source})
        .then(res => dispatch({
            type: CHECKOUT,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// This functions sets the order type to Orders Loading.
export const setOrdersLoading = () => {
    return{
        type: ORDERS_LOADING
    }
}