import {ADD_POST_COMMENTS} from "../constants/actionTypes";

const addPostComments = payload => {
    return {
        payload: payload,
        type: ADD_POST_COMMENTS
    };
};

export default addPostComments;