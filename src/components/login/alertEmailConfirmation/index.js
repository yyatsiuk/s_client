import React from "react";

class AlertEmailConfirmation extends React.Component {
    render() {
        return (
            <div className="flash-message notice">
                <strong>A message with a confirmation link has been sent to your email address. Please follow the link
                    to activate your account. Please check your spam folder if you didn't receive this email.</strong>
            </div>
        );
    }
}

export default AlertEmailConfirmation;