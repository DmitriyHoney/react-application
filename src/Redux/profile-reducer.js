import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_USER_POST = 'samurai-network/profile-reducer/ADD_USER_POST';
const SET_DISPLAYED_USER = 'samurai-network/profile-reducer/SET_DISPLAYED_USER';
const IS_MY_PAGE = 'samurai-network/profile-reducer/IS_MY_PAGE';
const SET_USER_STATUS = 'samurai-network/profile-reducer/SET_USER_STATUS';
const DELETE_POST = 'samurai-network/profile-reducer/DELETE_POST';
const SAVE_PHOTO = 'samurai-network/profile-reducer/SAVE_PHOTO';
const SET_USER_ID = 'samurai-network/profile-reducer/SET_USER_ID';
const SET_PROFILE_FORM_RESULT = 'samurai-network/profile-reducer/SET_PROFILE_FORM_RESULT';

let initialState = {
    posts: [
        {message: "My first post! Hello, world!", likeCount: 7},
        {message: "You don`t know me, but believe me", likeCount: 25},
        {
            message: "В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий.",
            likeCount: 42
        }
    ],
    currentUser: { //Текущий отображаемый пользователь
        aboutMe: null,
        contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null},
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: '',
        userId: 0,
        photos: {
            small: null,
            large: null
        }
    },
    myId: null,
    isMyPage: true,
    status: '',
    hasProfileFormError: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_POST:
            return {
                ...state,
                posts: [{message: action.textNewPost, likeCount: 0}, ...state.posts]
            }
        case SAVE_PHOTO:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    photos: {
                        small: action.photos.small,
                        large: action.photos.large
                    }
                }
            }
        case SET_DISPLAYED_USER:
            return {
                ...state,
                currentUser: {...action.userDataFromApi}
            }
        case IS_MY_PAGE:
            return {
                ...state,
                isMyPage: state.myId === +action.userId
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post, index) => index != action.postId)
            }
        case SET_USER_ID:
            return {
                ...state,
                myId: action.userId
            }
        case SET_PROFILE_FORM_RESULT:
            return {
                ...state,
                hasProfileFormError: action.bool
            }
        default:
            return {...state};
    }
};


//ActionCreator
export const addNewPostCreateAction = (textNewPost) => ({type: ADD_USER_POST, textNewPost});
export const setUserIdAC = userId => ({type: SET_USER_ID, userId});
const setDisplayedCurrentUser = (userDataFromApi) => ({type: SET_DISPLAYED_USER, userDataFromApi});
const isMyPageAC = (userId) => ({type: IS_MY_PAGE, userId});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const deleteUserPost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoActionCreator = (photos) => ({type: SAVE_PHOTO, photos});
export const setProfileEditFormResultToServer = (bool) => ({type: SET_PROFILE_FORM_RESULT, bool});

//ThunkCallback
export const addNewPostThuhnkCallback = (textNewPost) => (dispatch) => {
    dispatch(addNewPostCreateAction(textNewPost));
}
export const getProfilePageThunkCallback = (userId = initialState.myId) => async (dispatch) => {

    await dispatch(isMyPageAC(userId))
    const response = await profileApi.getProfilePeople(userId);
    dispatch(setDisplayedCurrentUser(response.data))

}
export const getUserStatusThunkCallback = (userId) => async (dispatch) => {
    const response = await profileApi.getUserStatus(userId);
    dispatch(setUserStatus(response.data))
};
export const savePhotoThunkCallback = photoFile => async dispatch => {
    const response = await profileApi.savePhotoToServer(photoFile);
    dispatch(savePhotoActionCreator(response.data.data.photos));
};
export const updateUserStatusThunkCallback = statusText => async dispatch => {
    const response = await profileApi.updateUserStatus(statusText)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(statusText));
    }
};
export const handleProfileEditFormThunkCallback = formData => async (dispatch, getState) => { //id для обновления страницы после редактирования
    let id = getState().profilePage.myId;
    let response = await profileApi.sendEditProfileSettings(formData);

    if (response.data.resultCode === 0) {
        dispatch(getProfilePageThunkCallback(id));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages : 'Unknown Error';
        dispatch(stopSubmit('profile-edit', {_error: message}));
        return Promise.reject(message);
    }
}

export default profileReducer;
