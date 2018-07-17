
import { createAction } from 'redux-actions';
import HttpUtil from '../../utils/HttpUtils';
import * as types from './NotiC';


export function refresh(url) {
    return dispatch => {
        dispatch(createAction(types.NOTI_LOADING)());

        HttpUtil.get(url)
            .then(resp => {
                dispatch(createAction(types.NOTI_DONE)(resp));
            }).catch(error => {
                dispatch(createAction(types.NOTI_ERROR)());
            });
    }

}