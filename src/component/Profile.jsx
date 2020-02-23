import React from 'react';

function Profile() {
    return (
        <div className="profile">
            <div className="avatar default-card">
                <a href="#" className="avatar-img">
                    <img src="https://farm2.static.flickr.com/1235/1264548661_57f72bd57b_b.jpg" alt="avatar" className="avatar-img" />
                </a>
                <div className="avatar-edit">
                    <button className="ghost-btn">Edit</button>
                    <button className="ghost-btn avatar-btn_further">
                        <i className="fa fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
            <div className="user-info default-card">
                <div className="user-info__status">
                    <h1 className="user-info__name">
                        Arnold Schwarzenegger
                    </h1>
                    <p className="user-info__twit">
                        set a status message
                    </p>
                    <span className="user-info__online">
                        online
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile;