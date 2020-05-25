import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const TOGGLE_AUTH = 'samurai-network/auth-reducer/TOGGLE_AUTH';
const SET_USER_DATA = 'samurai-network/auth-reducer/SET_USER_DATA';
const TOGGLE_PRELOADER = 'samurai-network/auth-reducer/TOGGLE_PRELOADER';
const SET_DEFAULT_STATE = 'samurai-network/auth-reducer/SET_DEFAULT_STATE';

let initialState = {
    isAuth: false,
    preloader: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH:
            return {isAuth: action.bool}
        case SET_USER_DATA:
            return {
                ...state,
                ...action.stateFromApi
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                preloader: action.bool
            }
        case SET_DEFAULT_STATE:
            return {
                isAuth: false,
                preloader: false
            }
        default:
            return state;
    }
};

//ActionCreator
const toggleAuthState = (bool) => ({type: TOGGLE_AUTH, bool});
const togglePreloader = (bool) => ({type: TOGGLE_PRELOADER, bool});
const setUserData = (stateFromApi) => ({type: SET_USER_DATA, stateFromApi});
const setDefaultState = () => ({type: SET_DEFAULT_STATE});
//Thunk
export const getAuthStateUser = () => async (dispatch) => {
    let response = await authApi.getAuthState();

    if (response.data.resultCode === 0) {
        dispatch(toggleAuthState(true));
        dispatch(setUserData(response.data.data));
    } else {
        dispatch(toggleAuthState(false));
    }
};

export const loginTheSiteThunkCallback = (formData) => async (dispatch) => {
    const response = await authApi.loginTheSite(formData);

    if (response.data.resultCode === 0) {
        dispatch(toggleAuthState(true));
        dispatch(getAuthStateUser());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Unknown error';
        dispatch(togglePreloader(false));
        dispatch(stopSubmit('loginForm', {_error: message}))
    }
}
export const logoutTheSiteCallback = () => async (dispatch) => {
    await authApi.logOutTheSite();
    dispatch(setDefaultState())
}

export default authReducer;