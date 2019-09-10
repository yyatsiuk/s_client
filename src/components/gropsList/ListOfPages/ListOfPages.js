import React, { Component } from "react";
import "./ListOfPages.scss";

class ListOfPages extends Component {
  render() {
    return (
      <div className="s-layout mt-3">
        <nav className="s-sidebar__nav">
          <ul className="list mr-3">
            <li>
              <a className="s-sidebar__nav-link " href="#0">
                <i className="fa fa-home" />
                <em>Home</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link " href="#0">
                <i className="fa fa-user" />
                <em>My Profile</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link " href="#0">
                <i className="fa fa-newspaper-o " />
                <em>News</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link " href="#0">
                <i className="fa fa-users" />
                <em>Groups</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link " href="#0">
                <i className="fa fa-bell " />
                <em>Notifications</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link " href="#0">
                <i className="fa fa-cog" />
                <em>Settings</em>
              </a>
            </li>
            <li>
              <a className="s-sidebar__nav-link" href="#0">
                <i className="fa fa-sign-out" />
                <em>Log out</em>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ListOfPages;
