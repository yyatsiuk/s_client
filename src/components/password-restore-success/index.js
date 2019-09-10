import React from "react";
import "./password-restore-success.css";
import {Link} from "react-router-dom";
import Logo from "../common/logo";

class PasswordRestoreSuccess extends React.Component {

    render() {
        return (
            <div className="stars email-confirmed">
                <div className="twinkling">
                    <div className='public-layout'>
                        <Logo/>
                        <div className='container'>
                            <div className="password-restore success">
                                Password was succefully changed!
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

export default PasswordRestoreSuccess;