import {connect} from "react-redux";
import Login from "./Login";
import addUserLoginData from "../../../actions/addUserLoginData";
import addUserLoginErrors from "../../../actions/addUserLoginErrors";
import addUserAuntificatedData from "../../../actions/addUserAuntificatedData";

const mapStateToProps = state => ({
    data: state.auth.login.data,
    errors: state.auth.login.errors
});

const mapDispatchToProps = dispatch => ({
    addUserLoginData: async payload => dispatch(addUserLoginData(payload)),
    addUserLoginErrors: payload => dispatch(addUserLoginErrors(payload)),
    addUserAuntificatedData: payload => dispatch(addUserAuntificatedData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);