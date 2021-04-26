// Import axios dependency
import axios from 'axios';
// Import the types that we need to use for the item actions.
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './types';
import { returnErrors } from './errorActions';

// function get items handles the fetching of all the items from the backend using the api endpoint designed for getting them. 
export const getItems = () => dispatch => {
    // Set items as loading and then we reach the api endpoint to get all items. If we get a succesful response then we set the type to Get_Items and then set the results of the data to be the payload. 
    dispatch(setItemsLoading());
    axios.get('/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//This function uses axios to make a post request to our items endpoint. If succesful we will get a response where we can send the results of the data to be payload and then set the type to Add_item
export const addItem = (item) => (dispatch) => {
    axios.post('/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//This function uses axios to make a delete request to our items endpoint. It takes in the id of the item we want to delete. If succesful we will get a response where we can send the id to be payload and then set the type to Delete_Item
export const deleteItem = (id) => (dispatch) => {
    axios.delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// This function is used to update an existing item present in our store. It uses axios to make a put request to the API endpoint with the help of an id and also sends in the new item object. Then we set the type as Update_item and set the payload as the id and the data we receive as the response from the server.
export const updateItem = (id, item) => (dispatch) => {
    axios.put(`/api/items/${id}`, item)
        .then(res => dispatch({
            type: UPDATE_ITEM,
            payload: Promise.all([id, res.data])
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// This function just sets the type as Items Loading
export const setItemsLoading = () => {
    return{
        type: ITEMS_LOADING
    }
}