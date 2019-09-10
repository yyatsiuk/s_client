import React from "react";
import "./ArrowForMore.scss";

class ArrowForMore extends React.Component {
    render() {
        return (
            <div className="arrow">
                <div className="dropdown">
                    <i className="fa fa-angle-down"></i>
                    <div className="dropdown-content">
                        <a href="#">Favourite</a>
                        <a href="#">Edit profile</a>
                        <a href="#">Nuted users</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArrowForMore;