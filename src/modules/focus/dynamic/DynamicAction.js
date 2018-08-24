
import { createAction } from 'redux-actions';
import * as types from './DynamicC';
import { Apis } from '../../../constants/Api';
import HttpUtil from '../../../utils/HttpUtils';

export function refresh() {
    return dispatch => {
        dispatch(createAction(types.DYNAMIC_LOADING)());
        HttpUtil.get(Apis.dynamic + "0" + "&num=10")
            .then(resp => {
                dispatch(createAction(types.NYMAMIC_DONE)(resp));
            }).catch(error => {
                dispatch(createAction(types.NOTI_ERROR)());
            });
    }

}

export function loadMore(index) {
    return dispatch => {
        dispatch(createAction(types.DYNAMIC_LOADING)());
        var cnt = index * 10;
        HttpUtil.get(Apis.dynamic + cnt + "&num=10")
            .then(resp => {
                dispatch(createAction(types.NYMAMIC_LOAD_MORE_DONE)(resp));
            }).catch(error => {
                dispatch(createAction(types.DYNAMIC_ERROR)());
            });
    }

}