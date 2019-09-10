import GoogleLogin from "./GoogleLogin";
import {connect} from "react-redux";
import addUserAuntificatedData from "../../../actions/addUserAuntificatedData";

const mapDispatchToProps = dispatch =>({
    addUserAuntificatedData: payload => dispatch(addUserAuntificatedData(payload))
});

export default connect(null, mapDispatchToProps)(GoogleLogin);

