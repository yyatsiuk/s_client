import React from "react";
import {Redirect} from "react-router-dom";
import API from "../../utills/API";
import Logo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import {validateEmail} from "../../utills";
import Notification from "./notification";

class PasswordRestore extends React.Component {

    state = {
        success: null,
        error: null,
        email: '',
        validate: false
    };

    handleInputChange = e => {
        this.setState({
            email: e.target.value,
        });

        if (this.state.validate) {
            this.setState({
                error: validateEmail(e.target.value)
            });
        }
    };


    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            validate: true
        });

        API.post("/auth/request-password-reset", this.state.email,{
            headers: {
                "Content-type" : "text/plain"
            }
        }).then(resp => {
            if (resp.data.result === "SUCCESS") {
                this.setState({
                    success: true
                });
            } else if (resp.data.result === "ERROR") {
                this.setState({
                    success: false
                });
            }

        }).catch(error => {
            this.setState({
                success: false
            });
        });
    };

    render() {
        return (
            <div className="stars">
                <div className="twinkling">
                    <div className='container-alt'>
                        <Logo/>
                        <div className='form-container' style={{"paddingTop": 0}}>
                            <form className="simple_form new_user" id="new_user" onSubmit={this.handleSubmit}>
                                {this.state.success != null && <Notification success={this.state.success}/>}
                                <div className='fields-group'>
                                    <Input
                                        name="email"
                                        type="email"
                                        handleInputChange={this.handleInputChange}
                                        value={this.state.email}
                                        error={this.state.error}
                                        label="email"
                                    />
                                </div>
                                <Button text="reset password"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PasswordRestore;