const UPDATE_MESSAGE_TEXTAREA   = 'UPDATE-MESSAGE-TEXTAREA';
const ADD_NEW_MESSAGE           = 'ADD-NEW-MESSAGE';

let initialState = {
    friends: [
        {userId: 1, name: 'Pavel Durov', src: 'https://rossaprimavera.ru/static/files/2c7ca8526ecb.jpg'},
        {userId: 2, name: 'Geralt of Rivia', src: 'http://gamebomb.ru/files/galleries/001/2/23/330556.jpg'},
        {userId: 3, name: 'Jennifer Connelly', src: 'https://avatars.mds.yandex.net/get-pdb/1935444/7ad1efd1-cc5f-48fc-96ad-c65bab20970c/s1200'},
        {userId: 4, name: 'Harry Potter', src: 'https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5a316bb4830905958b6dbad4_5a316bda77d0e6afcba2ac2d/scale_1200'},
        {userId: 5, name: 'Jack Sheppard', src: 'http://static2.kinootziv.com/source/files/wallpapers/matt/matthewfox67978.jpg'}
    ],
    chatTextarea: ''
};

const messageReducer = (state = initialState, action) => {
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