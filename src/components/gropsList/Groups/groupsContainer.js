import {connect} from "react-redux";
import Groups from "./Groups";

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(mapStateToProps, null)(Groups);