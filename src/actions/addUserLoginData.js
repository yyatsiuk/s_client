import {ADD_USER_LOGIN_DATA} from "../constants/actionTypes";

const addUserLoginData = payload => {

    return {
        type: ADD_USER_LOGIN_DATA,
        payload: payload
    };
};

export default addUserLoginData;