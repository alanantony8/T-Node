import React from "react";

const Output = ({data}) => {
    console.log(data.message);
    const x=data.message
    return(
        <>
        {
            x === "success" && 
            <div>
                <p><strong>Response:</strong> {data.message}</p>
                <p><strong>Weather Status:</strong> {data.status}<img src={data.status_icon}/></p>
                <p><strong>Search Name: </strong>{data.name}</p>
                <p><strong>Region: </strong>{data.region}</p>
                <p><strong>Country: </strong>{data.country}</p>
                <p><strong>Latitude: </strong>{data.lat}</p>
                <p><strong>Longitude:</strong> {data.lon}</p>
                <p><strong>Local Time:</strong> {data.localtime}</p>
                <p><strong>Zone:</strong> {data.location}</p>
            </div>
        }
        {
            x === "error" && 
            <div>
                <p>Response: {data.message}</p>
            </div>
        }
        {
            x===undefined && 
            <div>
                <p>Search a Place</p>
            </div>
        }
        </>
    );
}

export default Output;