import React from "react";
import "./ProfileOnNewsPage.scss"
import ArrowForMore from "../ArrowForMore/ArrowForMore";

class ProfileOnNewsPage extends React.Component {
    render() {
        return (
            <div className="card-promoting-card">
                <div className="card-body d-flex flex-row">
                    <i className="fa fa-user-circle" ></i>
                    <div>
                        <h4 className="card-title font-weight-bold mb-2">@NICKNAME </h4>
                        <p className="card-text"><a href="/">edit profile</a></p>
                    </div>
                    <ArrowForMore />
                </div>
            </div>
        );
    }
}

export default ProfileOnNewsPage;