'use strict';

import { combineReducers } from 'redux';
import loggin from '../modules/login/LoginReducers';
import NotiReducer from '../modules/notification/NotiReducer';


const rootReducer = combineReducers({
    loggin,
    NotiReducer,
});

export default rootReducer;