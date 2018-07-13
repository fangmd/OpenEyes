'use strict';

import {combineReducers} from 'redux';
import loggin from '../modules/login/LoginReducers';


const rootReducer = combineReducers({
    loggin
});

export default rootReducer;