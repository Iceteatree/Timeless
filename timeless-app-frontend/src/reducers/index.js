// Importing all the reducers as well as combine reducers module from redux.
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

// We use the combine Reducers function to combine all the reducers we've made.
export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
})