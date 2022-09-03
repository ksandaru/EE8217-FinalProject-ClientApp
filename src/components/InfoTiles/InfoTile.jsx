import React, {useEffect, useState} from "react";
import "./InfoTiles.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import Alert from "../alerts/Alert";
import FeatureMiddle from "./InfoTileMiddle";
import axios from "axios";

export default function InfoTile() {
    const [valtype,setValtype] = useState("Not selected")

    const [flag, setFlag] = useState(true);
    const [data, setData] = useState("");
    const getResults = async () => {
        setTimeout(() => setFlag(!flag), 2000)
        const {data} = await axios.get('http://localhost:8080/api/sensor-data/get-sensor-count');
        setData(data);

    }
    useEffect(() => {
        getResults();
    }, [flag])

    return (
        <div className="tileback">
            <div className="tilebackItem">
                <span className="tilebackTitle">Temperature Sensors</span>
                <div className="tilebackStatusContainer">
                    <span className="tilebackStatus">{data}</span>
                </div>
                <span className="tilebackSub">Number of active sensors</span>
            </div>


            <div className="tilebackItem">
                <span className="tilebackTitle">Select notification type</span>
                <div className="tilebackMoneyContainer">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-success" onClick={()=> setValtype("SMS")}>SMS</button>
                        <button type="button" className="btn btn-warning" onClick={()=> setValtype("Call")}>Call</button>
                        <button type="button" className="btn btn-primary" onClick={()=> setValtype("Email")}>Email</button>
                    </div>
                </div>
                <span className="tilebackSub">Default method:<p className="text-danger"><strong>{valtype}</strong></p> </span>
            </div>


        </div>
    )
}
