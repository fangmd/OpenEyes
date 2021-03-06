'use strict';

import { combineReducers } from 'redux';
import loggin from '../modules/login/LoginReducers';
import NotiReducer from '../modules/notification/NotiReducer';
import NotiReducer2 from '../modules/notification/NotiReducer2';
import DynamicReducer from '../modules/focus/dynamic/DynamicReducer';
import WorkDetailReducer from '../modules/workdetail/WorkDetailReducer';
import WorkReducer from '../modules/focus/works/WokrScreenReducer';

const rootReducer = combineReducers({
    loggin,
    NotiReducer,
    NotiReducer2,
    DynamicReducer,
    WorkDetailReducer,
    WorkReducer,
});

export default rootReducer;