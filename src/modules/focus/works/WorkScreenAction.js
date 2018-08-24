'use strict';

import { createAction } from 'redux-actions';
import * as types from './WokrScreenC';
import { Apis } from '../../../constants/Api';
import HttpUtil from '../../../utils/HttpUtils';


export function refresh() {
    return dispatch => {
        dispatch(createAction(types.WORK_SCREEN_LOADING));

        HttpUtil.get(Apis.work + "0" + "&num=10&newest=true")
            .then(resp => {
                dispatch(createAction(types.WORK_SCREEN_DONE)(resp));
            }).catch(error => {
                dispatch(createAction(types.WORK_SCREEN_ERROR));
            });
    }
}

export function loadMore(index) {
    return dispatch => {
        dispatch(createAction(types.WORK_SCREEN_LOAD_MORE));
        var cnt = index * 10;
        HttpUtil.get(Apis.work + cnt + "&num=10&newest=true")
            .then(resp => {
                dispatch(createAction(types.WORK_SCREEN_LOAD_MORE_DONE)(resp));
            }).catch(error => {
                dispatch(createAction(types.WORK_SCREEN_ERROR));
            });
    }
}