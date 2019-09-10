import React, {Component} from 'react';
import './post-list-container.css';
import PostListItem from "../post-list-item";
import {connect} from 'react-redux';
import fetchPosts from "../../../actions/fetchPosts";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const PostList = ({posts}) => {


    const postListItems = posts.map((post) => {
        return <li key={post.id}><PostListItem post={post}/></li>
    });

    return (
        <ul>
            {postListItems}
        </ul>
    );
};

class PostListContainer extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const {posts, loading, error} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        if (error) {
            return <ErrorIndicator/>;
        }
        return (
            <PostList posts={posts}/>
        );
    }
}


const mapStateToProps = ({user: {posts}, loading, error}) => {
    return {posts, loading, error};
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: dispatch => fetchPosts(dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
