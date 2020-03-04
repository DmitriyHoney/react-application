import React from "react";
import style from "./SubmitPost.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";
import {renderEntireDom} from '../../../../render';

const SubmitPost = (props) => {
    let referenceTextarea = React.createRef();
    const handleMyPost = () => {
        let elem = referenceTextarea.current;
        props.addPost(elem.value);
        elem.value = '';

    }

    return (
        <div className={`default-card ${style.submitPost}`}>
            <SmallAvatar src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg"/>
            <textarea className={style.submitPost__text} placeholder="What`s new?" ref={referenceTextarea}></textarea>
            <button className="main-btn" onClick={handleMyPost}>Post</button>
        </div>
    )
}

export default SubmitPost;