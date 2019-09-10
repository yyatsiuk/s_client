import {ADD_USER_REGISTER_ERRORS} from "../constants/actionTypes";

const addUserRegisterErrors = payload => {

  return  {
    type: ADD_USER_REGISTER_ERRORS,
    payload: payload
  };
};

export default addUserRegisterErrors;