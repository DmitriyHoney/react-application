import {usersApi} from '../api/api';

const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED';
const ADD_USER_STACK = 'ADD_USER_STACK';
const REMOVE_USER_STACK = 'REMOVE_USER_STACK';

let initialState = {
    countUsers: 7, //Пользователей на странице
    currentPage: 1, //Текущая страница
    totalCount: 3215, //Всего пользователей,
    preloader: false, //Прелоадер при false не показывается
    usersInSubscribeProcess: [],
    count: 0
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                items: action.dataFromApi.items,
                totalCount: action.dataFromApi.totalCount
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "FAIL":
            return {
                ...state,
                count: state.count + 1
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                preloader: action.bool
            }
        case TOGGLE_FOLLOWED:
            return {
                ...state,
                items: state.items.map(u => {
                    if(action.userId === u.id) {
                        return {...u, followed: action.bool}
                    }
                    return u;
                })
            }
        case ADD_USER_STACK:
            return {
                ...state,
                usersInSubscribeProcess: [action.userId, ...state.usersInSubscribeProcess]
            }
        case REMOVE_USER_STACK:
            return {
                ...state,
                usersInSubscribeProcess: state.usersInSubscribeProcess.filter(e => e !== action.userId)
            }
        default:
            return state;
    }
};

//ActionCreator
const setUsers = (dataFromApi) => ({type: SET_USERS, dataFromApi});
const setPage = (currentPage) => ({type: SET_PAGE, currentPage});
const togglePreloader = (bool) => ({type: TOGGLE_PRELOADER, bool});
const toggleFollowed = (userId, bool) => ({type: TOGGLE_FOLLOWED, userId, bool});
const addUserToSubscribeStack = (userId) => ({type: ADD_USER_STACK, userId});
const removeUserToSubscribeStack = (userId) => ({type: REMOVE_USER_STACK, userId});
//Thunks
export const getUsers = (currentPage, countUsers) => (dispatch) => {
    usersApi.getUsers(currentPage, countUsers)
        .then(response => {
            dispatch(setUsers(response.data));
            dispatch(togglePreloader(true));
        })
}
export const changeCurrentPage = (newPageNumber) => (dispatch) => {
    dispatch(setPage(newPageNumber));
    dispatch(togglePreloader(false));
    usersApi.getUsers(newPageNumber)
        .then(response => {
            dispatch(setUsers(response.data));
            dispatch(togglePreloader(true));
        })
}
export const followOnUser = (userId) => (dispatch) => {
    dispatch(addUserToSubscribeStack(userId));
    usersApi.followOnUser(userId)
        .then(response => {
            dispatch(toggleFollowed(userId,true));
            dispatch(removeUserToSubscribeStack(userId));
        })
}
export const unFollowOnUser = (userId) => (dispatch) => {
    dispatch(addUserToSubscribeStack(userId));
    usersApi.unFollowOnUser(userId)
        .then(response => {
            dispatch(toggleFollowed(userId,false));
            dispatch(removeUserToSubscribeStack(userId));
        })
}

export default usersReducer;


