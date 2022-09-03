import React from 'react';
import "./header.css";
import {NotificationsNone} from '@material-ui/icons';

export default function Header() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">Sensor Monitoring System</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
