import {getAuthStateUser} from "./auth-reducer";

const SET_INITIALIZE = 'SET_INITIALIZE';

let initialState = {
    initialize: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialize: action.bool
            }
        default:
            return {...state}
    }
};


//ActionCreator
export const setInitialize = bool => ({type: SET_INITIALIZE, bool});
//Thunks
export const getInitializeStateThunkCallback = () => dispatch => {
    let initializePromise = dispatch(getAuthStateUser());
    Promise.all([initializePromise])
        .then(() => {
                dispatch(setInitialize(true))
            }
        )
}

export default appReducer;
