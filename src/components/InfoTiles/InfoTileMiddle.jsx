import React from "react";
import "./InfoTiles.css";

const InfoTileMiddle = () => {
    return(
        <div className="tilebackItem">
            <span className="tilebackTitle">Alerts</span>
            <div className="tilebackStatusContainer">
                <span className="tilebackStatus">No recently</span>
            </div>
            <span className="tilebackSub">Compared to recent update</span>
        </div>
    )

}
export default InfoTileMiddle;