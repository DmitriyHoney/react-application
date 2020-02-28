import React from "react";
import style from "./MyPost.module.css"
import Post from "./Post/Post";
import SubmitPost from "./SubmitPost/SubmitPost";


const MyPost = () => {
    let messageData = [
        {message: "My first post! Hello, world!", likeCount: 7},
        {message: "You don`t know me, but believe me", likeCount: 25},
        {message: "В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий.", likeCount: 42},
    ];

    let renderMessageData = messageData.map( (post) => {
        return <Post message={post.message} likeCount={post.likeCount}/>
    });

    return(
        <div className={style.postWrap}>
            <SubmitPost/>
            {renderMessageData}
        </div>
    )
}

export default MyPost;