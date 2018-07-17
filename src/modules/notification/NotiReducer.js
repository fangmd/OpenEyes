import * as types from './NotiC';
import { handleAction, handleActions } from 'redux-actions';

const initState = {
    data: [

    ],
    error: false,
    refreshing: false,
}

export default handleActions({
    [types.NOTI_DONE]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                data: action.payload,
            }
        }
    },
    [types.NOTI_LOADING]: {
        next(state, action) {
            return {
                ...state,
                refreshing: true,
            }
        }
    },
    [types.NOTI_ERROR]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                error: true,
            }
        }
    }
}, initState)