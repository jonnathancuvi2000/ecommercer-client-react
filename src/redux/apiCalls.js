import { loginFailure, loginStart, loginSuccess, loginUpdate } from "./userRedux";
import { publicRequest, userRequest, userRequestPut } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const updagteUser = async (dispatch, user) => {
    // dispatch(loginStart());
    try {
        const res = await userRequestPut.put(`/users/${user._id}`, user);
        // dispatch(loginUpdate(res.data));
    } catch (err) {
        // dispatch(loginFailure());
    }
};