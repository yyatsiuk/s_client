import React from 'react';
import './post-content.css';

const PostContent =({text, photo}) => {

    return (
            <div className="post-content">
                <div className="text-content">
                    <p>{text}</p>
                </div>
                <div className="photo-content">
                    <div className="photo">
                        <img src={photo}
                             alt="" />
                            </div>
                </div>
            </div>
    );
};

export default PostContent;