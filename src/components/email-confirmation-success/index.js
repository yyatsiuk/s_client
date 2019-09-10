import React from "react";
import Logo from "../common/logo";
import "./index.css";
import {Link} from "react-router-dom";

class EmailConfirmed extends React.Component {

    render() {
        return (
            <div className="stars email-confirmed">
                <div className="twinkling">
                    <div className='public-layout'>
                        <Logo/>
                        <div className='container'>
                            <h1 className="email-confirmed__header">Your email was successfully confirmed</h1>
                            <Link to="/home" className="email-confirmed__button">
                                    go to account
                            </Link>
                            <img src="/img/star_vars_email.jpg" alt="" className="email-confirmed__img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailConfirmed;