import React from "react";
import {Link} from "react-router-dom";

const Logo = props => {
    return (
        <div className='logo-container'>
            <h1>
                <Link to="/about" href="/">
                    <img src="/img/logo.png" style={{width: "350px", heigth: "50px"}} alt=""/>
                </Link>
            </h1>
        </div>
    );
}

export default Logo;