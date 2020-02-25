import React from "react";
import style from "./MyPost.module.css"
import Post from "./Post/Post";
import SubmitPost from "./SubmitPost/SubmitPost";


function MyPost() {
    return(
        <div className={style.postWrap}>
            <SubmitPost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPost;