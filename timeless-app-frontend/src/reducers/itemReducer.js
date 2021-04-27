// Import all the types we need for authentication from the actions folder
import { 
    GET_ITEMS, 
    ADD_ITEM, 
    UPDATE_ITEM, 
    DELETE_ITEM, 
    ITEMS_LOADING } from '../actions/types';

    // Set the inital state of items to an empty array and then loading to  false.
const initialState = {
    items: [],
    loading: false
}

// This function then starts checking for each action type and makes changes as applicable. It deals with handling all the tasks related to items in this application.
export default function itemReducer(state=initialState, action){
    // Setting up a switch statement if the action type is any of these different cases then do the following.
    switch(action.type){
        // If it is Get_Items then set the items to the payload of the action and the set loading to false.
        case GET_ITEMS:
            return{
                ...state,
                items: action.payload,
                loading: false
            }
        
        // If the case is Add Item then we call our current state using the spread operator and then add the new item received from the payload to the items array.
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        
        // In this case,  we call our current state with the spread operator then we set the state to get the id of the deleted item via the payload of the action. We take the items array and remove the item whose id matches the filter.
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item._id!==action.payload)                
            };
        
        // In this case we deconstruct the id and data from the actions payload. we then get the current state using the spread operator and then find the item from the items array using its id and then update it with the new item data.
        case UPDATE_ITEM:
            const { id, data } = action.payload;
            return{
                ...state,
                // eslint-disable-next-line array-callback-return
                items: state.items.map(item => {
                    if(item._id===id){
                        item = data;
                    }
                })
            }
        
        // In this case we set the loading to true.
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}