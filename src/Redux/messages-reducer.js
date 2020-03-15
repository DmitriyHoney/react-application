const UPDATE_MESSAGE_TEXTAREA   = 'UPDATE-MESSAGE-TEXTAREA';
const ADD_NEW_MESSAGE           = 'ADD-NEW-MESSAGE';

const messageReducer = (state, action) => {

    switch(action.type) {
        case UPDATE_MESSAGE_TEXTAREA:
            state.chatTextarea = action.newValue;
            return state;
        case ADD_NEW_MESSAGE:
            state.chatTextarea = '';
            return state;
        default:
            return state;
    }
};

export const updateMessageTextareaCreateAction = (text) => ({type: UPDATE_MESSAGE_TEXTAREA, newValue: text});
export const addNewMessageCreateAction = () => ({type: ADD_NEW_MESSAGE});

export default messageReducer;