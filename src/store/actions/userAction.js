import * as types from '../constants';
import { toast } from 'react-toastify';

export const userSignup = authPayload => async dispatch => {
    const res = await fetch(`https://debt-management-system.herokuapp.com/api/v1/auth/signup`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(authPayload)
    });
    const user = await res.json();
    if (user.status === 201) {
        dispatch({
            type: types.USER_SIGN_UP,
            payload: user.data
        });
        return user;
    } else {
        toast.error(user.error);
    }
}

export const userSignin = authPayload => async dispatch => {
    const res = await fetch(`https://debt-management-system.herokuapp.com/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(authPayload)
    });
    const user = await res.json();
    if (user.status === 200) {
        dispatch({
            type: types.USER_SIGN_IN,
            payload: user.data
        });
        return user;
    } else {
        toast.error(user.error);
    }
}
