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
    try {
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
    } catch (error) {
       console.log(error.message); 
    }
}

export const userProfile = authPayload => async dispatch => {
    const userToken = localStorage.getItem('user-token');
    const res = await fetch(`https://debt-management-system.herokuapp.com/api/v1/updateProfile`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            token: userToken
        },
        body: JSON.stringify(authPayload)
    });
    const user = await res.json();
    if (user.status === 200) {
        dispatch({
            type: types.USER_PROFILE,
            payload: user.data
        });
        return user;
    } else {
        toast.error(user.error);
    }
}

// export const getUserProfile = authPayload => async dispatch => {
//     const userToken = localStorage.getItem('user-token');
//     const res = await fetch(`https://debt-management-system.herokuapp.com/api/v1/getProfile`, {
//         method: "GET",
//         headers: {
//             "content-type": "application/json",
//             token: userToken
//         },
//         body: JSON.stringify(authPayload)
//     });
//     const user = await res.json();
//     if (user.status === 200) {
//         dispatch({
//             type: types.GET_PROFILE,
//             payload: user.data
//         });
//         return user;
//     } else {
//         toast.error(user.error);
//     }
// }
