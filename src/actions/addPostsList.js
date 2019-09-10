import ADD_POST_LIST from "../constants/actionTypes";

const addPostsList = payload => {
  return {
    payload: payload,
    type: ADD_POST_LIST
  };
};

export default addPostsList;