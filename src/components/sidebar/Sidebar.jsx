import "./sidebar.css";
import React from "react";
import {Link} from "react-router-dom";


export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                Home
                            </li>
                        </Link>
                        <Link to="/history" className="link">
                        <li className="sidebarListItem">
                            History
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
