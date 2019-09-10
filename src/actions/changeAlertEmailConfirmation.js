import {CHANGE_ALERT_EMAIL_CONFIRMATION} from "../constants/actionTypes";

const changeAlertEmailConfirmation = payload => {
    return {
        type: CHANGE_ALERT_EMAIL_CONFIRMATION,
        payload: payload
    }
};

export default changeAlertEmailConfirmation;