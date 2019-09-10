import React from "react";
import {Redirect} from "react-router-dom";
import API from "../../utills/API";
import Logo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import {passwordValidator} from "../../utills";

class PasswordRestoreHandler extends React.Component {

    state = {
        success: null,
        error: null,
        password: '',
        validate: false
    };

    handleInputChange = e => {
        if (this.state.validate) {
            this.setState({
                password: e.target.value,
                error: passwordValidator(e.target.value)
            });
        } else {
            this.setState({
                password: e.target.value,
            });
        }

    };


    handleSubmit = async e => {
        e.preventDefault();
        await this.setState({
            validate: true
        });
        this.setState(prevState => ({
            error: passwordValidator(prevState.password)
        }));
        //password-reset
        if(this.state.error == null){
            API.post("/auth/password-reset", {
                password: this.state.password,
                token: this.props.match.params.token
            }).then(resp => {
                console.log("/auth/password-reset", resp);
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
        }

    };

    render() {
        if (this.state.success) {
            return <Redirect push to="/auth/password-restore/success"/>;
        } else if(this.state.success === false){
            return <Redirect push to="/auth/password-restore/error"/>;
        }

        return (
            <div className='container-alt'>
                <Logo/>
                <div className='form-container' style={{"paddingTop": 0}}>
                    <form className="simple_form new_user" id="new_user" onSubmit={this.handleSubmit}>
                        <div className='fields-group'>
                            <Input
                                name="password"
                                type="password"
                                handleInputChange={this.handleInputChange}
                                value={this.state.password}
                                error={this.state.error}
                                label="new password"
                            />
                        </div>
                        <Button text="reset password"/>
                    </form>
                </div>
            </div>
        );
    }

}

export default PasswordRestoreHandler;