import Home from "./Home";
import Alert from "../../alerts/Alert";
import React, {useEffect, useState} from "react";
import axios from "axios";
import "./home.css";
const HistoryPage = () => {

    const [flag, setFlag] = useState(true);
    const [data, setData] = useState([]);
    const getResults = async () => {
        setTimeout(() => setFlag(!flag), 2000)
        const {data: response} = await axios.get('http://localhost:8000/api/sensor-data/get-all-sensor');
        setData(response);
        console.log(response)

    }
    useEffect(() => {
        getResults();
    }, [flag])

    const filtered = data.filter((sensor) => sensor.data_value > 33)
    // const mapped = filtered.map((statuss)=> statuss.data_value)
    console.log(filtered);
  return(
          <div className="AlertsList">
              {filtered.map(unit=> <Alert sensor={unit.sensor_id} temp={unit.data_value} date={unit.date}/>)
              }
          </div>

  )
}
export default HistoryPage;