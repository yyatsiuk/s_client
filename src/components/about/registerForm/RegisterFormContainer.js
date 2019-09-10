import {connect} from "react-redux";
import RegisterForm from "./RegisterForm";
import addUserRegisterData from "../../../actions/addUserRegisterData";
import addUserRegisterErrors from "../../../actions/addUserRegisterErrors";
import changeAlertEmailConfirmation from "../../../actions/changeAlertEmailConfirmation";

const mapActionsToProps = (dispatch) => ({
    addUserRegisterData: async payload => dispatch(addUserRegisterData(payload)),
    addUserRegisterErrors: async payload => dispatch(addUserRegisterErrors(payload)),
    changeAlertEmailConfirmation: payload => dispatch(changeAlertEmailConfirmation(payload))
});

const mapStateToProps = state => ({
    data: state.auth.register.data,
    errors: state.auth.register.errors
});


export default connect(mapStateToProps, mapActionsToProps)(RegisterForm);