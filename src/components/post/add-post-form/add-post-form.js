import React, { Component } from 'react';
import { connect } from 'react-redux';
import './add-post-form.css';
import {addPost} from "../../../actions/post_action";





const AddPost = ({onAddedPost}) => {

    /*const {onAddedPost} = this.props;*/

    const now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth()+1;
    let yyyy = now.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }
    const date = dd+'.'+mm+'.'+yyyy;

    const post = {
        id: 4,
        nickname: "@marynochka",
        date: "09.04.2019",
        photo_profile: "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?cs=srgb&dl=backlit-blur-couple-556667.jpg&fm=jpg",
        text: "some text",
        photo: "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?cs=srgb&dl=backlit-blur-couple-556667.jpg&fm=jpg",

    };
    return (
        <div className="post-form">
            <form className="form" >
                <div className="post-header">
                    <div className="icon-profile">
                        <img src="" alt="" />
                    </div>
                    <div className="post-info-about-user">
                        <p className="nickname">nickname</p>
                        <p className="date">{date}</p>
                        <div className="button-add-photo">
                            <div className="form-group">
                                <input type="file" name="file" id="file" className="input-file"/>
                                <label htmlFor="file" className="square_btn">
                                    ADD FILE
                                </label>
                            </div>
                        </div>
                        <button id = "post-button" className="square_btn"
                            onClick= {() => this.props.onAddedPost(post)}>
                            POST</button>
                    </div>
                </div>
                <TextArea />
            </form>
        </div>
    );
};
/*
class AddPostForm extends Component {



    render() {

        const {onAddedPost} = this.props;

        return (
            <AddPost onAddedPost = {onAddedPost} />
        );
    }
}*/

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedPost: (post) =>{
            console.log("i m here");
            dispatch(addPost(post));
        },
    }
};


class TextArea extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            rows: 5,
            minRows: 5,
            maxRows: 10,
            message: '',
        };
    }

    handleChange = (event) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;
        const previousRows = event.target.rows;
        event.target.rows = minRows;
        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }
        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };


    render(){
        return (
            <textarea
                ref={(input) => this.getText = input}
                rows={this.state.rows}
                value={this.state.value}
                placeholder={'What\'s on your mind?'}
                className={'textarea'}
                onChange={this.handleChange}
            />
        );
    }

}



export default connect(null, mapDispatchToProps)(AddPost);