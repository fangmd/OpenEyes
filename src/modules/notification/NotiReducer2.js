import * as types from './NotiC';
import { handleAction, handleActions } from 'redux-actions';

        // this.props = {
        //     data: [
        //     ],
        //     error: false,
        //     refreshing: false,
        //     url: "",
        // }
        
const initState = {
    data: [

    ],
    error: false,
    refreshing: false,
}

export default handleActions({
    [types.NOTI_DONE2]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                data: action.payload.messageList,
            }
        }
    },
    [types.NOTI_LOADING2]: {
        next(state, action) {
            return {
                ...state,
                refreshing: true,
            }
        }
    },
    [types.NOTI_ERROR2]: {
        next(state, action) {
            return {
                ...state,
                refreshing: false,
                error: true,
            }
        }
    }
}, initState)