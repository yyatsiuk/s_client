import {ADD_USER_LOGIN_ERRORS} from "../constants/actionTypes";

const addUserLoginErrors = payload => {
  return {
   type: ADD_USER_LOGIN_ERRORS,
   payload: payload
  };
};

export default addUserLoginErrors;