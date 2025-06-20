import React from "react";
import UseFetch from "./UseFetch";
import './FetchData.css'

const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
        <h1 className="useFetch_heading">Yoga data</h1>
        <ol className="list_data_main">
            {data && data.map((e, index) => (
                <li key={index} className="list_data">
                    <h3>{e.name}</h3>
                    <p><strong>Benefits: </strong>{e.benefits}</p>
                    <p><strong>Time duration: </strong>{e.time_duration}</p>
                </li>
            ))}
        </ol>
        </>
    )
}

export default FetchYogaData