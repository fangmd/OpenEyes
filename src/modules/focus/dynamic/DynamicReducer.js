import * as types from './DynamicC';
import { handleAction, handleActions } from 'redux-actions';

const initState = {
    data: [

    ],
    error: false,
    refreshing: false,
    index: 0,
}

export default handleActions({
    [types.NYMAMIC_DONE]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                data: action.payload.itemList,
            }
        }
    },
    [types.NYMAMIC_LOAD_MORE_DONE]: {
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
    },
    [types.DYNAMIC_LOADING]: {
        next(state, action) {
            return {
                ...state,
                refreshing: true,
            }
        }
    },
    [types.DYNAMIC_LOADING]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                error: true,
            }
        }
    }
}, initState)