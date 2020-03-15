const ADD_USER_POST             = 'ADD-USER-POST';
const UPDATE_POST_TEXTAREA      = 'UPDATE-POST-TEXTAREA';

const profileReducer = (state, action) => {
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