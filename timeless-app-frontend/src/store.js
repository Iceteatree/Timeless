// Standard way to setup a Redux store.

// Importing relevant modules
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Setting up initialState to an empty object.
const initialState = {};

// This middleware allows you to write action creators that return a function instead of an action.
const middleWare = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;

