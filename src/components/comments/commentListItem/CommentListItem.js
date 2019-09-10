import React, {Fragment, Component} from 'react';
import './CommentListItem.scss';
import API from "../../../utills/API";
import addPostComments from "../../../actions/addPostComments";
import {connect} from "react-redux";
import Modal from "reactstrap/es/Modal";

class CommentListItem extends Component {

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        text: this.props.comment.text,
        modalIsOpen: false
    };

    delete = () => {
        console.log("delete comment first");
        API.delete(`/comments/${this.props.comment.id}`).then(resp => {
            console.log("delete comment second");
            this.renderComments();
        }).catch(error => {
            console.log("error", error);
        });
    };

    renderComments() {
        const {addPostComments} = this.props;
        API.get(`/comments/posts/${this.props.postId}`, {headers: {
                Authorization : `Bearer_${this.props.user.token}`
            }
        }).then(data => {
            addPostComments({
                comments: data.data,
                postId: this.props.postId
            });
        })
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    CommentTextChange(e) {
        this.setState(
            {text: e.target.value}
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        API.patch(`/comments/${this.props.comment.id}`, {
            text: this.state.text
        }, {headers: {
                Authorization : `Bearer_${this.props.user.token}`
            }
        })
            .then(() => {
                this.renderComments();
            })
            .then(function (data) {
                console.log('Request success: ', data);
            })
            .catch(function (error) {
                console.log('Request failure: ', error);
            });
        this.closeModal();
    };

    render() {
        return (
            <div className="commentListItemStyle">
                <div className="container d d-flex justify-content-start ">

                    <div className="commentDiv">
                        <div className="row commentText">
                            <div className="col-9 ">
                                <span className="commentUserName">@{this.props.comment.creator.nickname} </span>
                                <br/>
                                <p className="">{this.props.comment.text}</p>
                            </div>
                            <div className="col-3 ">
                                {this.props.user.id === this.props.comment.creator.id ? <div className="row">
                                    <div className="col-12">
                                        <button onClick={this.openModal} className="commentEditDelete"
                                                data-toggle="modal"
                                                data-target="editCommentModal">
                                            <i className="fa fa-pencil"/> Edit
                                        </button>
                                        <Modal
                                            isOpen={this.state.modalIsOpen}
                                            onRequestClose={this.closeModal}
                                            contentLabel="Example Modal">
                                            <div className="row editUserModal">
                                                <div className="editUserModalHeader col-12 pt-2 d-flex flex-row">
                                                    <button className="closeModalButton m-1" onClick={this.closeModal}><i
                                                        className="fa fa-times"/></button>
                                                    <span className="edit-your-info-text text-left">Edit comment</span>
                                                    <form className="edit-save-form d-flex justify-content-end"
                                                          onSubmit={this.handleSubmit}>
                                                        <button
                                                            className="btn btn-primary editUserSaveButton float-xs-right">Save
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="col-12 editUserModalElementsDiv d-flex flex-column mt-2">
                                                    <div className="editUserModalElement d-flex flex-column">
                                                        {/*<span className="textareaEditUserUpper">Nickname</span>*/}
                                                        <input value={this.state.text}
                                                               onChange={(e) => this.CommentTextChange(e)}
                                                               placeholder="Edit your comment."
                                                               className="textareaEditUser "/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal>

                                    </div>
                                    <div className="col-12">
                                        <button onClick={() => {
                                            this.delete();
                                        }} className="commentEditDelete">
                                            <i className="fa fa-trash"/> Delete
                                        </button>
                                    </div>
                                </div> : ''}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    addPostComments: async payload => dispatch(addPostComments(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListItem);