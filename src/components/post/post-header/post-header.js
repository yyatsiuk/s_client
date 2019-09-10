import React from 'react';
import './post-header.css';
import ButtonFunctions from "../button-functions";

const PostHeader = ({nickname, date, photo_profile, deletePost}) => {

        return(
            <div className="post-header">
                <div className="post-user-info">
                    <div className="icon-profile">
                        <img src={photo_profile}
                             alt="" />
                    </div>
                    <p className="nickname">{nickname}</p>
                    <p className="date">{date}</p>
                    <ButtonFunctions deletePost = {deletePost}/>
                </div>
            </div>
        );
};

export default PostHeader;