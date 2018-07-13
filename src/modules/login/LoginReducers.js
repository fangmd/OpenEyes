'use strict';
import * as pageState from '../../constants/PageC'

// 初始状态
const initialState = {
    status: pageState.INIT,
    isSuccess: false,
}


export default function loggin(state = initialState, action) {
    return state;
}