import React from "react";
import style from "./Post.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";

function Post(props) {
    return(
        <div className={`${style.userPost} default-card`}>
            <div className={style.userPost__header}>
                <SmallAvatar />
                <div className={style.userPost__author}>
                    <a href="#">
                        Arnold Schwarzenegger
                    </a>
                    <p><time dateTime="2012-12-23">8 Feb 2017</time></p>
                </div>
            </div>
            <div className={style.userPost__content}>
                {props.message}
            </div>
            <div className={style.userPost__footer}>
                <a href="#" className={style.userPost__like}>
                    <i className="fa fa-heart"></i>
                    <span className={style.userPost__likeCont}>
                        {props.likeCount}
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Post;