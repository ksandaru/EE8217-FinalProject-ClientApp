import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import SingleSensor from "./SingleSensor";


const SensorTable = () => {
    const [flag, setFlag] = useState(true)
    const [data, setData] = useState([])


    const getResults = async () => {
        setTimeout(() => setFlag(!flag), 2000)
        const {data: response} = await axios.get('http://localhost:8080/api/sensor-data/get-all-sensor');
        setData(response);
        console.log(response)

    }
    useEffect(() => {
        getResults();
    }, [flag])


    return (
        <Fragment>
            <div className="chart" >
                <h1 className="h3">Sensor Data Table</h1>
                <table className="table table-hover table-light">
                    <thead>
                    <tr>
                        <th scope="col">SensorID</th>
                        <th scope="col">Temperature(°C)</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((sensor) =>
                        <SingleSensor  sensor={sensor} />
                    )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )


}

export default SensorTable;