import React from "react";
import style from "./MyPost.module.css"
import Post from "./Post/Post";
import SubmitPost from "./SubmitPost/SubmitPost";


const MyPost = (props) => {

    let renderMessageData = props.postData.posts.map( (post, index) => {
        return <Post key={index} message={post.message} likeCount={post.likeCount}/>
    });
    return(
        <div className={style.postWrap}>
            <SubmitPost addPost={props.addPost} updatePost={props.updatePost} value={props.postData.newPostValue}/>
            {renderMessageData}
        </div>
    )
}

export default MyPost;