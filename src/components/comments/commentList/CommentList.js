import React, {Component, Fragment} from 'react';
import CommentListItem from "../commentListItem";
import {connect} from 'react-redux';
import './CommentList.css';
import API from '../../../utills/API'
import addPostComments from "../../../actions/addPostComments";



class CommentList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.componentDidMount();
    }


    componentDidMount() {
        const {addPostComments} = this.props;
        API.get(`/comments/posts/${this.props.post.id}`, {headers: {
                Authorization : `Bearer_${this.props.user.token}`
            }
        }).then(data => {
            addPostComments({
                comments: data.data,
                postId: this.props.post.id
            });
        } )
    }

    CommentTextChange(e) {
        this.setState(
            {text: e.target.value}
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        API.post("/comments", {
            post_id: this.props.post.id,
            creator_id: this.props.user.id,
            text: this.state.text
        },{headers: {
                Authorization : `Bearer_${this.props.user.token}`
            }
        })
            .then(() => {
                this.componentDidMount();
                this.state.text = '';
            })
            .then(function (data) {
                console.log('Request success: ', data);
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });
    };


    render() {
        return (
            <Fragment>
                <ul>
                    {
                        this.props.post.comments.map((comment) => {
                            return (
                                <div key={comment.id}><CommentListItem reRenderComments={this.renderComments} postId={this.props.post.id} comment={comment}/></div>
                            )
                        })
                    }
                </ul>

                <div className="container pb-cmnt-container">
                    <div className="row mt-2">
                        <div className="col-10 col-md-8 offset-2 offset-md-3">
                            <div className="card-info">
                                <div className="card-block">
                                    {this.props.user.id !== null ?
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-9">
                                        <input value={this.state.text} onChange={(e) => this.CommentTextChange(e)}
                                                   placeholder="Write your comment here!"
                                                  className="pb-cmnt-textarea"/>
                                                </div>
                                                <div className="col-3 pl-0 d-flex justify-content-start">
                                                    <button className="btn btn-primary float-xs-right shareComment" type="submit">Share
                                                    </button>
                                                </div>
                                                <div className=" ">

                                                </div>
                                            </div>
                                        </form>
                                        :
                                        <div className="row">
                                            <div className="col-9">
                                        <textarea value="In order to write comments, please Log In!"
                                                  onChange={(e) => this.CommentTextChange(e)}

                                                  className="pb-cmnt-textarea unlogged"/>

                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }
}






const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    addPostComments: async payload => dispatch(addPostComments(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);


