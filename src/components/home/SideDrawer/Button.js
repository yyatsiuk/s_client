import React from "react";
import './Button.scss';

const button = props => (
    <button className="buttonn" onClick={props.click}>
        <div className="button_line" />
        <div className="button_line" />
        <div className="button_line" />
    </button>
);

export default button
