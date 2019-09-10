import {connect} from "react-redux";
import Home from "./home";

const mapStateToProps = state => ({
   posts: state.user.posts
});

export default connect(mapStateToProps,null)(Home);