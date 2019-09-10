import {ADD_POST_LIST, FETCH_POSTS} from "../constants/actionTypes";

import API from "../utills/API";
import {store} from "../store";

const state = store.getState();

const fetchPosts = dispatch => {
    API.post(`/posts/owner/${store.getState().user.id}`)
        .then(resp => {
            dispatch({
               type: ADD_POST_LIST,
               payload: resp.data.posts
            });
        }).catch(error => {

    });
};

export default fetchPosts;