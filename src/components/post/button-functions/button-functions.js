import React from 'react';
import './button-functions.css';

const ButtonFunctions =({editPost, deletePost}) => {

    return (
        <div className="button-functions">
            <button className="square_btn">EDIT</button>
            <button className="square_btn">DELETE</button>
        </div>
    );
};
export default ButtonFunctions;

