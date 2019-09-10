import React from "react";

class Notification extends React.Component {

    render() {
        let notification;
        if (this.props.success) {
            notification =
                (<div className="flash-message notice">
                    <strong>A message with a password restore link has been sent to your email address. Please follow the
                        link
                        to activate your account. Please check your spam folder if you didn't receive this
                        email.</strong>
                </div>);
        } else {
            notification =
                (<div className="flash-message error">
                    <strong>An error ocurred during attempt to resore password</strong>
                </div>);
        }
        return notification;
    }
}

export default Notification;