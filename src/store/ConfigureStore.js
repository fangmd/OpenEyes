'use strict';
import { createStore, applyMiddleware } from "../../node_modules/redux";
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}


