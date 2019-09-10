import React, {Fragment} from 'react';
import './post-list-item.css';
import PostHeader from "../post-header";
import PostContent from "../post-content";
import CommentList from "../../comments/commentList";

const PostListItem = ({post, deletePost}) => {


    const {id, nickname, date, photo_profile,
    text, photo, comment} = post;

    return(
        <Fragment>
            <div className="post">
                <PostHeader nickname = {nickname} date={date} photo_profile={photo_profile}
                />
                <PostContent text = {text} photo={photo}/>
                <CommentList post={post}/>
            </div>
        </Fragment>
    );
};

export default PostListItem;