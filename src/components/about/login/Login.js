import React, {Component} from "react";
import {Redirect, Link} from "react-router-dom";

import "./Login.css";
import {passwordValidator, validateEmail} from "../../../utills";
import API from "../../../utills/API";
import GoogleLogin from "../google-login";

class Login extends Component {

    state = {
        redirectToLogin: false,
        redirectToAccount: false
    };

    handleInputChange = e => {
        this.setInputState(
            e.target.name,
            e.target.value
        )
    };

    setInputState = async (name, value) => {
        await this.props.addUserLoginData({
            ...this.props.data,
            [name]: value
        });
        this.validate();
    };

    validate() {
        this.props.addUserLoginErrors({
            email: validateEmail(this.props.data.email),
            password: passwordValidator(this.props.data.password)
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.errors.email == null && this.props.errors.password == null) {
            API.post("/auth/login", this.props.data)
                .then(resp => {
                    console.log("resp", resp);
                    this.props.addUserAuntificatedData({
                        id: resp.data.id,
                        firstName: resp.data.firstName,
                        lastName: resp.data.lastName,
                        email: resp.data.email,
                        nickname: resp.data.nickname,
                        token: resp.data.token,
                    });
                    this.props.addUserLoginData({
                        email: "",
                        password: ""
                    });
                    this.setState({
                        redirectToAccount: true
                    });
                })
                .catch(error => {
                    console.log("error", error);
                    this.props.addUserLoginErrors({
                        email: "Invalid Email or password",
                        password: null
                    });
                    this.setState({
                        redirectToLogin: true
                    });
                });
        } else {
            this.setState({
                redirectToLogin: true
            });
        }
    };

    render() {
        if (this.state.redirectToAccount) {
            return <Redirect push to="/home"/>
        }
        if (this.state.redirectToLogin) {
            return <Redirect push to="/auth/login"/>
        }
        return (
            <form className="simple_form new_user"
                  id="new_user"
                  noValidate="novalidate"
                  action="/auth/sign_in"
                  onSubmit={this.handleSubmit}
                  method="post">
                <div className='fields-group'>
                    <div className="input email optional user_email">
                        <input aria-label="E-mail address"
                               className="string email optional"
                               placeholder="E-mail address"
                               type="email"
                               name="email"
                               value={this.props.data.email}
                               onChange={this.handleInputChange}
                               id="user_email"/>
                    </div>
                    <div className="input password optional user_password">
                        <input aria-label="Password"
                               className="password optional"
                               placeholder="Password"
                               type="password"
                               name="password"
                               onChange={this.handleInputChange}
                               value={this.props.data.password}
                               id="user_password"/>
                    </div>
                </div>
                <div className='actions'>
                    <button name="button" type="submit" className="btn button button-primary">
                        LOG IN
                    </button>
                    <GoogleLogin text="LOG IN WITH GOOGLE"/>
                </div>
                <p className='hint subtle-hint'>
                    <Link to="/auth/password-restore">
                        Trouble logging in?
                    </Link>
                </p>
            </form>
        );
    };
}

export default Login;