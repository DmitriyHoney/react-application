import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const TOGGLE_AUTH = 'TOGGLE_AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_DEFAULT_STATE = 'SET_DEFAULT_STATE';

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
            return {...state};
    }
};

//ActionCreator
const toggleAuthState = (bool) => ({type: TOGGLE_AUTH, bool});
const togglePreloader = (bool) => ({type: TOGGLE_PRELOADER, bool});
const setUserData = (stateFromApi) => ({type: SET_USER_DATA, stateFromApi});
const setDefaultState = () => ({type: SET_DEFAULT_STATE});
//Thunck
export const getAuthStateUser = () => (dispatch) => {
    return authApi.getAuthState()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleAuthState(true));
                dispatch(setUserData(response.data.data));
            } else {
                dispatch(toggleAuthState(false));
            }
        })
};
export const loginTheSiteThunkCallback = (formData) => (dispatch) => {
    authApi.loginTheSite(formData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleAuthState(true));
                dispatch(getAuthStateUser());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Unknown error';
                dispatch(togglePreloader(false));
                dispatch(stopSubmit('loginForm', {_error: message}))
            }
        })
}
export const logoutTheSiteCallback = () => (dispatch) => {
    authApi.logOutTheSite()
        .then(response => {
            dispatch(setDefaultState())
        })
}

export default authReducer;