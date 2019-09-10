import React from "react";
import "./Toolbar.scss";
import Button from '../SideDrawer/Button';
import logo from "./logo.jpg"

const toolbar = props => (
    <center>
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button"><Button click={props.drawerClickHandler} /></div>
                <div className="toolbar_logo"><a href="/"><img src={logo} alt={logo} /></a></div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href='/'>FIRST</a></li>
                        <li><a href='/'>SECOND</a></li>
                        <li><a href='/'>THIRD</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </center>
)

export default toolbar