import React from "react";
import API from "../../../utills/API";
import {GoogleLogin as GoogleLoginComponent} from 'react-google-login';
import "./GoogleLogin.css";
import {Redirect} from "react-router-dom";

class GoogleLogin extends React.Component {
    
    state = {
        redirect: false
    };

    render() {
        let redirectUrl;

        if (process.env.NODE_ENV === "production") {
            redirectUrl = "https://sonet-social.net/auth/google/callback";
        } else {
            redirectUrl = "http://localhost:3000/auth/google/callback";
        }

        const responseGoogle = (response) => {
            const data = {
                idToken: response.Zi.id_token,
                email: response.profileObj.email,
                id: response.profileObj.googleId,
                lastName: response.profileObj.familyName,
                name: response.profileObj.givenName,
                photoUrl: response.profileObj.imageUrl
            };
            console.log(response);
            console.log("json", data);
            API.post("/auth/google", data).then(resp => {
                this.props.addUserAuntificatedData({
                    id: resp.data.id,
                    firstName: resp.data.firstName,
                    lastName: resp.data.lastName,
                    email: resp.data.email,
                    nickname: resp.data.nickname,
                    token: resp.data.token,
                });
                this.setState({
                    redirect: true
                })
            }).catch(error => {
                alert(error);
                console.log(error);
            });
            //alert("response");
        };

        if (this.state.redirect) {
            return <Redirect push to="/home"/>
        }

        return (
            <GoogleLoginComponent
                className="login-with-google-btn"
                clientId="13596939476-qpn1kb1d0jo3hevubfnettu4but38tad.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText={this.props.text}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                redirectUri={redirectUrl}
            />
        );
    }
}

export default GoogleLogin;


