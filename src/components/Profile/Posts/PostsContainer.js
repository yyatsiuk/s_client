import {connect} from "react-redux";
import Post from "./Posts";
import fetchPosts from "../../../actions/fetchPosts";

const mapStateToProps = state => ({
   posts: state.user.posts
});

const mapDispatchToProps = (dispatch) => {
   return {
      fetchPosts: dispatch => fetchPosts(dispatch),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);