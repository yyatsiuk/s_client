import React from "react";
import {Redirect} from "react-router-dom";
import Spinner from "../common/spinner";
import API from "../../utills/API";

class emailConfirmation extends React.Component {

    state = {
        success: null
    };

    componentWillMount() {
        const token = this.props.match.params.token;
        const data = {
            token: token
        };
        console.log(data);
        API.get(`/auth/email-verification?token=${token}`).then(resp => {
            console.log("resp", resp, resp.data.result);
            // alert(resp.data.result);
            if(resp.data.result === "SUCCESS") {
                this.setState({
                    success: true
                });
            } else if(resp.data.result === "ERROR") {
                this.setState({
                    success: false
                })
            }

        }).catch(error => {
            console.log("error", error);
            this.setState({
               success: false
            });
        })
    }

    render() {
        let element;
        switch (this.state.success) {
            case null:
                element = <Spinner/>;
                break;
            case true:
                element = <Redirect push to="/auth/email/confirmed"/>
                break;
            case false:
                element = <Redirect push to="/auth/email/conformation-error"/>
        }

        return (
            <div className="stars email-confirmed">
                <div className="twinkling">
                    {element}
                </div>
            </div>
        );
    }

}

export default emailConfirmation;