import {usersApi} from '../api/api';

const SET_USERS = 'samurai-network/users-reducer/SET_USERS';
const SET_PAGE = 'samurai-network/users-reducer/SET_PAGE';
const TOGGLE_PRELOADER = 'samurai-network/users-reducer/TOGGLE_PRELOADER';
const TOGGLE_FOLLOWED = 'samurai-network/users-reducer/TOGGLE_FOLLOWED';
const ADD_USER_STACK = 'samurai-network/users-reducer/ADD_USER_STACK';
const REMOVE_USER_STACK = 'samurai-network/users-reducer/REMOVE_USER_STACK';

let initialState = {
    countUsers: 7, //Пользователей на странице
    currentPage: 1, //Текущая страница
    totalCount: 3215, //Всего пользователей,
    preloader: false, //Прелоадер при false не показывается
    usersInSubscribeProcess: [],
    count: 0,
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
export const addUserToSubscribeStack = (userId) => ({type: ADD_USER_STACK, userId});
const removeUserToSubscribeStack = (userId) => ({type: REMOVE_USER_STACK, userId});
//Thunks
export const getUsers = (currentPage, countUsers) => async (dispatch) => {
    const response = await usersApi.getUsers(currentPage, countUsers);
    dispatch(setUsers(response.data));
    dispatch(togglePreloader(true));
}
export const changeCurrentPage = (newPageNumber) => async (dispatch) => {
    dispatch(setPage(newPageNumber));
    dispatch(togglePreloader(false));

    const response = await usersApi.getUsers(newPageNumber)
    dispatch(setUsers(response.data));
    dispatch(togglePreloader(true));
}
export const followOnUser = (userId) => async (dispatch) => {
    dispatch(addUserToSubscribeStack(userId));
    const response = await usersApi.followOnUser(userId)

    dispatch(toggleFollowed(userId,true));
    dispatch(removeUserToSubscribeStack(userId));
}
export const unFollowOnUser = (userId) => async (dispatch) => {
    dispatch(addUserToSubscribeStack(userId));
    const response = await usersApi.unFollowOnUser(userId)

    dispatch(toggleFollowed(userId,false));
    dispatch(removeUserToSubscribeStack(userId));
}

export default usersReducer;


