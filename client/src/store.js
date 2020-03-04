// Entry to REDUX store
// Holds entire state tree of app
// Set up as object with methods
// Only way to change state inside is to DISPATCH an ACTION on it

// Reducers interact with the front-end

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {};

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    // Include everything inside middleware with spread
    applyMiddleware(...middleware)
));

export default store;