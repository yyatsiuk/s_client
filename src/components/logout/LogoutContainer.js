import {connect} from "react-redux";

import Logout from "./Logout";
import reinitStore from "../../actions/reinitStore";

const mapDispatchToProps = dispatch => ({
    reinitStore: () => dispatch(reinitStore())
});

export default connect(null, mapDispatchToProps)(Logout);

