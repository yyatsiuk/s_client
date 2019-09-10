import React, {Component} from "react";
import "./ListOfPages.css";
import {Link} from "react-router-dom";

class ListOfPages extends Component {
    render() {
        return (
            <div className="mt-3">
                <nav className="s-sidebar__nav">
                    <ul className="sideList mr-3">
                        <li>
                            <Link to="/home" className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-home"/><em>Home</em>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-user"/><em>My Profile</em>
                            </Link>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-newspaper-o "/><em>News</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-users"/>
                                <em>Groups</em>
                            </a>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-bell "/><em>Notifications</em>
                            </a>
                        </li>
                        <li>
                            <Link to="/conversation/" className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-envelope"/><em>Conversation</em>
                            </Link>
                        </li>
                        <li>
                            <a className="s-sidebar__nav-link " href="#0">
                                <i className="fa fa-cog"/><em>Settings</em>
                            </a>
                        </li>
                        <li>
                            <Link to="/logout" className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-sign-out"/><em>Log out</em>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ListOfPages;