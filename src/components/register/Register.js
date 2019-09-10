import React from "react";

import Logo from "../common/logo";
import ErrorExplanation from "./error-explanation";
import Input from "../common/input";
import Agreement from "./agreement";

import {
    validateEmail,
    validateNickname,
    passwordValidator,
    confirmPasswordValidator,
    validateAgreement
} from "../../utills";
import Footer from "./footer";
import Button from "../common/button";
import {Redirect} from "react-router-dom";
import API from "../../utills/API";


class Register extends React.Component {

    state = {
        redirectToLogin: false,
        validate: false,
        alert: false,
        alertTimeout: null
    };

    componentWillMount() {
        if (this.haveError()) {
            this.showAlert();
        }
    }

    errorsCount = () => {
        let count = 0;
        if (this.props.errors.nickname) count++;
        if (this.props.errors.email) count++;
        if (this.props.errors.password) count++;
        if (this.props.errors.confirmPassword) count++;
        if (this.props.errors.agreement) count++;
        return count;
    };

    haveError(){
        return this.errorsCount() !== 0;
    }

    toggleAgreement = async () => {
        await this.props.addUserRegisterData({
            ...this.props.data,
            agreement: !this.props.data.agreement
        });
        this.validate();
    };

    setInputState = async (name, value) => {
        await this.props.addUserRegisterData({
            ...this.props.data,
            [name]: value
        });
        if (this.state.validate) {
            this.validate();
            if(this.haveError()){
                this.showAlert();
            }
        }
    };

    validate = () => {
        this.props.addUserRegisterErrors({
            email: validateEmail(this.props.data.email),
            nickname: validateNickname(this.props.data.nickname),
            password: passwordValidator(this.props.data.password),
            confirmPassword: confirmPasswordValidator(this.props.data.password, this.props.data.confirmPassword),
            agreement: validateAgreement(this.props.data.agreement)
        });
    };

    handleInputChange = e => {
        this.setInputState(
            e.target.name,
            e.target.value
        )
    };

    showAlert() {
        const alertTimeoutFunc = () => {
            this.setState({
                alert: false
            });
        };
        clearTimeout(this.state.alertTimeout);

        this.setState({
            alert: true,
            alertTimeout: setTimeout(alertTimeoutFunc, 5000)
        });

    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            validate: true
        });
        API.post("/auth/register", {
            nickname: this.props.data.nickname,
            email: this.props.data.email,
            password: this.props.data.password,
            confirmPassword: this.props.data.confirmPassword
        })
            .then(resp => {
                this.props.changeAlertEmailConfirmation(true);
                this.props.addUserRegisterData({
                    agreement: false,
                    nickname: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
                this.setState({
                    redirectToLogin: true
                });
            }).catch(error => {
            // this.props.changeAlertEmailConfirmation(true);
            this.props.addUserRegisterErrors({
                nickname: "nickname is not unique",//error.message.nickname,
                email: "email is not unique"//error.message.email
            });
        });
    };


    render() {
        if (this.state.redirectToLogin) {
            return <Redirect push to="/auth/login"/>
        }
        return (
            <div className='container-alt'>
                <Logo/>
                <div className='form-container' style={{"paddingTop": 0}}>
                    <form className="simple_form new_user" id="new_user" onSubmit={this.handleSubmit}>
                        {this.haveError() && <ErrorExplanation count={this.errorsCount()}/>}
                        <div className='fields-group'>
                            <Input
                                name="nickname"
                                type="text"
                                handleInputChange={this.handleInputChange}
                                value={this.props.data.nickname}
                                error={this.props.errors.nickname}
                                label="Nickname"
                                hint="Your nickname will be unique on sonet-social.net"
                                maxLength={100}
                            />
                        </div>
                        <div className='fields-group'>
                            <Input
                                name="email"
                                type="email"
                                handleInputChange={this.handleInputChange}
                                value={this.props.data.email}
                                error={this.props.errors.email}
                                label="E-mail address"
                                hint="You will be sent a confirmation e-mail"
                            />
                        </div>
                        <div className='fields-group'>
                            <Input
                                name="password"
                                type="password"
                                handleInputChange={this.handleInputChange}
                                value={this.props.data.password}
                                error={this.props.errors.password}
                                label="Password"
                                hint="Use at least 8 characters"
                                maxLength={36}
                            />
                        </div>
                        <div className='fields-group'>
                            <Input
                                name="confirmPassword"
                                type="password"
                                handleInputChange={this.handleInputChange}
                                value={this.props.data.confirmPassword}
                                error={this.props.errors.confirmPassword}
                                label="Confirm password"
                                maxLength={36}
                            />
                        </div>
                        <div className='fields-group'>
                            <Agreement
                                agreement={this.props.data.agreement}
                                error={this.props.errors.agreement}
                                toggle={this.toggleAgreement}
                            />
                        </div>
                        <Button text="sing up"/>
                    </form>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Register;