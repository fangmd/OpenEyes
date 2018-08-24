'use stricts';

import * as types from './WokrScreenC';
import { handleActions } from 'redux-actions';

const initState = {
    data: [],
    error: false,
    refreshing: false,
    index: 0,
    loadingMore: false,
}

export default handleActions({
    [types.WORK_SCREEN_LOADING]: {
        next(state, action) {
            return {
                ...state,
                refreshing: true,
            }
        }
    },
    [types.WORK_SCREEN_DONE]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                data: action.payload.itemList,
            }
        }
    },
    [types.WORK_SCREEN_LOAD_MORE_DONE]: {
        next(state, action) {
            let ret = state.data.concat(action.payload.itemList);
            let index = state.index + 1;
            return {
                ...state,
                refreshing: false,
                data: ret,
                index: index,
            }
        }
    }

}, initState)


