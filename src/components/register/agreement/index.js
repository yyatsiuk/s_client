import React from "react";
import classNames from "classnames";

const Agreement = props => {
    return (
        <div
            className={classNames("input", "with_label", "boolean", "optional", "user_agreement", {"field_with_errors": props.error})}>
            <div className="label_input">
                <label className="boolean optional" htmlFor="user_agreement">
                    I agree to the{" "}
                    <a href="/about/more" target="_blank">server rules</a>
                    {" "}and{" "}
                    <a href="/terms" target="_blank">terms of service</a>
                </label>
                <div className="label_input__wrapper">
                    <input value="0" type="hidden" name="user[agreement]"/>
                    <label className="checkbox">
                        <input className="boolean optional"
                               type="checkbox"
                               checked={props.agreement}
                               onChange={(e) => {
                                   props.toggle()
                               }}
                               name="agreement"
                               id="user_agreement"/>
                    </label>
                </div>
            </div>
            {props.error != null && <span className="error">{props.error}</span>}
        </div>
    );
};

export default Agreement;