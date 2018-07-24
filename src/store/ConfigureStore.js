'use strict';
import { createStore, applyMiddleware } from "../../node_modules/redux";
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}


