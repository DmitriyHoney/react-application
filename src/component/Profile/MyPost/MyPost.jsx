import React from "react";
import style from "./MyPost.module.css"
import Post from "./Post/Post";


function MyPost() {
    return(
        <div className={style.postWrap}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPost;