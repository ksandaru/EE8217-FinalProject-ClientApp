import React, {useEffect, useState} from "react";
import {Line, LineChart, YAxis, Legend, ResponsiveContainer, Tooltip, CartesianGrid, XAxis, Label} from 'recharts';
import "./chart.css"
import axios from "axios";


const Chart = () => {
    const [flag, setFlag] = useState(true)
    const [data, setData] = useState([])


    const getResults = async () => {
        setTimeout(() => setFlag(!flag), 2000)
        const {data: response} = await axios.get('http://localhost:8080/api/sensor-data/get-all-sensor');
        setData(response);


    }
    useEffect(() => {
        getResults();
    }, [flag])

    return (
        <div className="chart">
            <h3 className="chartTitle">Sensor Data Monitor</h3>
            <ResponsiveContainer width="100%" aspect={4 / 2}>
                <LineChart data={data} width={600} height={500}>
                    <Line name="Temperature(°C)" dataKey="data_value" type="monotone" stroke="#8884d8"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="sensor_id" stroke="#5550bd">
                        <Label value="Sensor ID" offset={0} position="insideBottom"/>
                    </XAxis>
                    <YAxis label={{ value: 'Temperature(°C)', angle: -90, position: 'insideLeft'}}/>
                    <Tooltip cursor={{stroke: 'red', strokeWidth: 2}}/>
                    <Legend verticalAlign="top" height={36}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart;
