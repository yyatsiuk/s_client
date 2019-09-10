import React from "react";
import {Redirect} from "react-router-dom";

class Logout extends React.Component {

    componentWillMount() {
        this.props.reinitStore();
    }

    render() {
        return <Redirect to="/auth/login"/>
    }
}

export default Logout;