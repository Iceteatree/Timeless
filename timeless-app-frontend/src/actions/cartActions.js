// Import axios dependency
import axios from 'axios';
import { returnErrors } from './errorActions';
// Import the types that we need to use for the item actions.
import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING } from './types';

// This function fetches the cart for any user. 
export const getCart = (id) => dispatch => {
    // Set the cart as loading.
    dispatch(setCartLoading());
    // We then use axios to make a get request to our endpoint. The function passes the id as a param and receives a response consisting of the cart of the user. We then set the type as Get_cart.
    axios.get(`/api/cart/${id}`)
        .then(res => dispatch({
            type: GET_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// This function is used to add an item to the cart. 
export const addToCart = (id, productId, quantity) => dispatch => {
    // It makes a post request to our endpoint with our id as a param. It also passes on the productId and quuantity as the request body. We then receive a response which we assign the payload and set the type as Add_to_cart.
    axios.post(`/api/cart/${id}`, {productId, quantity})
        .then(res => dispatch({
            type: ADD_TO_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// This function is used to delete an item from the cart.
export const deleteFromCart = (userId, itemId) => dispatch => {
    // We use axios to make a delete request to our endpoint api. It takes in the userId and the itemID and passes these aas params to the API endpoint. We then set the payload as the responses data and then set the type to Delete_from_cart
    axios.delete(`/api/cart/${userId}/${itemId}`)
        .then(res => dispatch({
            type: DELETE_FROM_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// This sets the type as Cart_Loading
export const setCartLoading = () => {
    return{
        type: CART_LOADING
    }
}