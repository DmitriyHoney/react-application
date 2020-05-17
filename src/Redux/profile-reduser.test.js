import React from "react";
import profileReducer, {addNewPostCreateAction, deleteUserPost} from "./profile-reducer";

let state = {
    posts: [
        {message: "My first post! Hello, world!", likeCount: 7},
        {message: "You don`t know me, but believe me", likeCount: 25},
        {
            message: "В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий.",
            likeCount: 42
        }
    ]
};

test('New post should be added', () => {
    // 1. Test data
    let action = addNewPostCreateAction("test Post");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expect
     expect(newState.posts.length).toBe(4);
});

test('Post text in correct', () => {
    //1. Test data
    let action = addNewPostCreateAction('New Post');
    //2. New Data
    let newState = profileReducer(state, action);
    //3. Expected
    expect(newState.posts[0].message).toBe('New Post');
});

test('Post delete process sucess', () => {
    //1. Test data
    let action = deleteUserPost(2);
    //2. New Data
    let newState = profileReducer(state, action);
    //3. Expect
    expect(newState.posts.length).toBe(2);
})
