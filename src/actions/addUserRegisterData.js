import {ADD_USER_REGISTER_DATA} from "../constants/actionTypes";

const addUserRegisterData = payload => {

    return {
        type: ADD_USER_REGISTER_DATA,
        payload: payload
    };
};

export default addUserRegisterData;