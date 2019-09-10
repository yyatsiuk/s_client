import React from "react";
import Logo from "../common/logo";
import ErrorExplanation from "../register/error-explanation";
import Input from "../common/input";
import Button from "../common/button";
import {passwordValidator, validateEmail} from "../../utills";
import AlertEmailConfirmation from "./alertEmailConfirmation";
import {Redirect} from "react-router-dom";
import API from "../../utills/API";

class Login extends React.Component {

    state = {
        redirect: false,
        validate: false,
        alert: false,
        alertTimeout: null
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    showAlert(){
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

    componentWillMount() {
        if(this.props.errors.email != null || this.props.errors.password != null) {
            this.setState({
               validate: true
            });
            this.showAlert();
        }
    }

    validate() {
        if (this.state.validate) {
            this.props.addUserLoginErrors({
                email: validateEmail(this.props.data.email),
                password: passwordValidator(this.props.data.password)
            });
            this.showAlert();
        } else {
            this.props.addUserLoginErrors({
                email: null,
                password: null
            });
        }
    };

    errorCount() {
        let count = 0;
        if (this.props.errors.email != null) count++;
        if (this.props.errors.password != null) count++;
        return count;
    }

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

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            validate: true
        });
        if (this.props.errors.password == null && this.props.errors.email == null) {
            console.log(this.props.data);
            API.post("/auth/login", this.props.data)
                .then(resp => {
                    console.log(resp.data);
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
                        redirect: true
                    });
                    console.log("resp", resp);
                }).catch(error => {
                console.log("error", error);
                this.props.addUserLoginErrors({
                    email: "Invalid Email or password",
                    password: "Invalid Email or password"
                });
            });
        } else {
            //alert("form not valid");
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/home"/>
        }
        return (
            <div className='container-alt'>
                <Logo/>
                <div className='form-container' style={{"paddingTop": 0}}>
                    <form className="simple_form new_user" id="new_user" onSubmit={this.handleSubmit}>
                        {this.props.alertEmailConfirmation && <AlertEmailConfirmation/>}
                        {this.state.alert && <ErrorExplanation count={this.errorCount()}/>}
                        <div className='fields-group'>
                            <Input
                                name="email"
                                type="email"
                                handleInputChange={this.handleInputChange}
                                value={this.props.data.email}
                                error={this.props.errors.email}
                                label="E-mail address"
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
                            />
                        </div>
                        <Button text="log in"/>
                    </form>
                </div>
            </div>
        );
    }

}

export default Login;