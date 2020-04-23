import {authApi} from "../api/api";
import {getAuthStateUser} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return {...state};
    }
};

//ActionCreator
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
//Thunck
export const initializeProject = () => (dispatch) => {
    let promise = dispatch(getAuthStateUser())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
};

export default appReducer;
