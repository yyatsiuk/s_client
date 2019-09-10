import React from "react";
import './SideDrawer.scss'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">First</a></li>
            <li><a href="/">Second</a></li>
            <li><a href="/">Third</a></li>
        </ul>
    </nav>
    )
}

export default sideDrawer;