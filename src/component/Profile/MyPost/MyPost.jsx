import React, {Component, PureComponent} from "react";
import style from "./MyPost.module.css"
import Post from "./Post/Post";
import SubmitPost from "./SubmitPost/SubmitPost";

class MyPost extends PureComponent {
    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps.posts !== this.props.posts || nextProps.newPostValue !== this.props.newPostValue || nextState !== this.state
    }*/

    render() {
        let renderMessageData = this.props.posts.map((post, index) => {
            return <Post key={index} message={post.message} likeCount={post.likeCount}/>
        });
        console.log('MyPost Render');

        return (
            <div className={style.postWrap}>
                <SubmitPost value={this.props.newPostValue}/>
                {renderMessageData}
            </div>
        )
    }
}

export default MyPost;