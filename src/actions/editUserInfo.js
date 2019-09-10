import {EDIT_USER_DATAILS} from "../constants/actionTypes";

const editUserDetails = payload => {
  return {
      type: EDIT_USER_DATAILS,
      payload: payload
  };
};