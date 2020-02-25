import React from "react";
import style from "./MyPost.module.css"
import Post from "./Post/Post";
import SubmitPost from "./SubmitPost/SubmitPost";


function MyPost() {
    return(
        <div className={style.postWrap}>
            <SubmitPost/>
            <Post message="My first post! Hello, world!" likeCount="7"/>
            <Post message="You don`t know me, but believe me" likeCount="25"/>
            <Post message="В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий." likeCount="42" />
        </div>
    )
}

export default MyPost;