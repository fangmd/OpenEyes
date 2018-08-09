
import { createAction } from 'redux-actions';
import * as types from './WorkDetailC';
import { Apis } from '../../constants/Api';
import HttpUtil from '../../utils/HttpUtils';

export function getData(id) {
    return dispatch => {
        dispatch(createAction(types.WORK_DETAIL_LOADING)());

        HttpUtil.get(Apis.workDetail + "/" + id)
            .then(resp => {
                dispatch(createAction(types.WORK_DETAIL_DOEN)(resp));
            }).catch(error => {
                dispatch(createAction(types.WORK_DETAIL_ERROR)());
            });
    }

}

export function getRelate(id) {
    return dispatch => {
        dispatch(createAction(types.WORK_DETAIL_RELATE_LOADING));

        HttpUtil.get(Apis.workDetailRelate + id)
            .then(resp => {
                dispatch(createAction(types.WORK_DETAIL_RELATE_DOEN)(resp));
            }).catch(error => {
                dispatch(createAction(types.WORK_DETAIL_RELATE_ERROR)());
            });
    }
}
