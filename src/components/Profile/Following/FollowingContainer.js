import {connect} from "react-redux";
import Following from "./Following";

const mapStateToProps = state => ({
   following: state.user.following
});

export default connect(mapStateToProps, null)(Following);