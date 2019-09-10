import React from "react";
import "./page-404.css";
import {Link} from "react-router-dom";

class Page404 extends React.Component {
    render() {
        return (
            <div className="page-404">
                <div className="page-404__content">
                    <h1 className="page-404__error-code">404</h1>
                    <h2 className="page-404__error-description">page not found</h2>
                    <Link className="page-404__link" to="/home">
                        home
                    </Link>
                </div>
            </div>

        );
    }
}

export default Page404;