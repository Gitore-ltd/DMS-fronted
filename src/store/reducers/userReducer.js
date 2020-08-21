import { initialState } from '../intialState';
import * as types from '../constants';

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_SIGN_UP || types.USER_SIGN_IN:
            return {
                ...state,
                user: action.payload.data,
                token: action.payload.jwtoken
            }
        default:
            return state;

    }
}

export default userReducer;