import React from "react";
import "./password-reset-error.css";
import {Link} from "react-router-dom";
import Logo from "../common/logo";

class PasswordRestoreError extends React.Component {

    render() {
        return (
            <div className="stars email-confirmed">
                <div className="twinkling">
                    <div className='public-layout'>
                        <Logo/>
                        <div className='container'>
                            <div className="password-restore error">
                                some error occurred during password reset
                            </div>
                            <Link push to="/home" className="password-restore-back-button">
                                home page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PasswordRestoreError;