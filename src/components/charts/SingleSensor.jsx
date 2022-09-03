import React, {Fragment} from "react";

const SingleSensor = ({ sensor: { sensor_id, date, data_value}}) => {
    return (
        <Fragment>
            <tr>
                <td>{sensor_id}</td>
                <td>{data_value}</td>
                <td>{date}</td>
            </tr>
        </Fragment>

    );
};


export default SingleSensor;