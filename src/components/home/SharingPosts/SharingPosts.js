import "./SharingPosts.scss";
import React from "react";


class SharingPosts extends React.Component{
    render(){
        return(
            <div className="container">
        <div className="comment">
            <textarea className="textinput" placeholder="Write something here"></textarea>
            <a href="#fakeLink" className="btn purple circular">Tell all</a>
        </div>
    </div>
        )
    }
}

export default SharingPosts;