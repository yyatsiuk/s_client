import React from "react";
import Logo from "../common/logo";
import "./index.css";
import {Link} from "react-router-dom";

class EmailConfirmed extends React.Component {

    render() {
        return (
            <div className="stars email-confirmed-error">
                <div className="twinkling">
                    <div className='public-layout'>
                        <Logo/>
                        <div className='container'>
                            <h1 className="email-confirmed-error__header">An error ocured during email confirmation</h1>
                            <Link to="/about" className="email-confirmed-error__button">
                                go back to about
                            </Link>
                            <img src="/img/star_vars_email.jpg" alt="" className="email-confirmed-error__img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailConfirmed;