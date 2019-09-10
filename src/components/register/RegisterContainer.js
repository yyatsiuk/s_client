import {connect} from "react-redux";
import Register from "./Register";
import addUserRegisterData from "../../actions/addUserRegisterData";
import addUserRegisterErrors from "../../actions/addUserRegisterErrors";
import changeAlertEmailConfirmation from "../../actions/changeAlertEmailConfirmation";

const mapStateToProps = (state) => ({
    data: state.auth.register.data,
    errors: state.auth.register.errors,
});

const mapActionsToProps = (dispatch) => ({
    addUserRegisterData: async payload => dispatch(addUserRegisterData(payload)),
    addUserRegisterErrors: payload => dispatch(addUserRegisterErrors(payload)),
    changeAlertEmailConfirmation: payload => dispatch(changeAlertEmailConfirmation(payload))
});


export default connect(mapStateToProps, mapActionsToProps)(Register);