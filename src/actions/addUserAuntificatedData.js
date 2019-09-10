import {ADD_AUTIFICATED_USER_DATA} from "../constants/actionTypes";

const addAutificatedUserData = payload => {

    return {
        type: ADD_AUTIFICATED_USER_DATA,
        payload: payload
    };

};

export default addAutificatedUserData;