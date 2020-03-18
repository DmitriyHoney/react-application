const ADD_USER_POST             = 'ADD-USER-POST';
const UPDATE_POST_TEXTAREA      = 'UPDATE-POST-TEXTAREA';

let initialState = {
    newPostValue: '',
    posts: [
        {message: "My first post! Hello, world!", likeCount: 7},
        {message: "You don`t know me, but believe me", likeCount: 25},
        {
            message: "В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий.",
            likeCount: 42
        }
    ],
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER_POST:
            let userMessage = state.newPostValue,
            newUserPost = {message: userMessage, likeCount: 0};

            state.posts.unshift(newUserPost);
            state.newPostValue = '';
            return state;
        case UPDATE_POST_TEXTAREA:
            state.newPostValue = action.newValue;
            return state;
        default:
            return state;
    }
};

export const updatePostTextareaCreateAction = (text) => ({type: UPDATE_POST_TEXTAREA, newValue: text});
export const addNewPostCreateAction = () => ({type: ADD_USER_POST});

export default profileReducer;