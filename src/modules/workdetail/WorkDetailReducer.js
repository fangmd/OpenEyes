"use strict";

import * as types from "./WorkDetailC";
import { handleActions } from 'redux-actions';

const initState = {
    data: {},
    relateData: [],
    error: false,
    refreshing: false,
    index: 0,
}

export default handleActions({
    [types.WORK_DETAIL_LOADING]: {
        next(state, action) {
            return {
                ...state,
                refreshing: true,
            }
        }
    },
    [types.WORK_DETAIL_DOEN]: {
        next(state, action) {
            return {
                ...state,
                data: action.payload,
                refreshing: false,
            }
        }
    },
    [types.WORK_DETAIL_RELATE_DOEN]: {
        next(state, action) {
            const dataList = action.payload.itemList.filter(item => {
                return item.type === 'videoSmallCard';
            });
            return {
                ...state,
                refreshing: false,
                relateData: dataList,
            }
        }
    }

}, initState)