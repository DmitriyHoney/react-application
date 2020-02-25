import React from "react";
import style from "./Post.module.css";

function Post() {
    return(
        <div className={`${style.userPost} default-card`}>
            <div className={style.userPost__header}>
                <div className={style.userPost__avatar}>
                    <img src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg" alt="avatar"/>
                </div>
                <div className={style.userPost__author}>
                    <a href="#">
                        Arnold Schwarzenegger
                    </a>
                    <p><time dateTime="2012-12-23">8 Feb 2017</time></p>
                </div>
            </div>
            <div className={style.userPost__content}>
                Hello, world!
            </div>
            <div className={style.userPost__footer}>
                <a href="#" className={style.userPost__like}>
                    <i className="fa fa-heart"></i>
                </a>
            </div>
        </div>
    )
}

export default Post;