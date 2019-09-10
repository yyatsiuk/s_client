import {connect} from "react-redux";
import Followers from "./Followers";

const mapStateToProps = state => ({
   followers: state.user.followers
});

export default connect(mapStateToProps, null)(Followers);