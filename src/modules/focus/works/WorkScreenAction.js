'use strict';

import { createAction } from 'redux-actions';
import * as types from './WokrScreenC';
import { Apis } from '../../../constants/Api';
import HttpUtil from '../../../utils/HttpUtils';


export function refresh() {
    return dispatch => {
        dispatch(createAction(types.WORK_SCREEN_LOADING));

        HttpUtil.get(Apis.work)
            .then(resp => {
                dispatch(createAction(types.WORK_SCREEN_DONE)(resp));
            }).catch(error => {
                dispatch(createAction(types.WORK_SCREEN_ERROR));
            });
    }
}