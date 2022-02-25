import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Verses = () => {
    const params = useParams();
    console.log(params.lines,"params liness");
    var x;
    const [data, setData] = useState('');
    var options = {
        method: 'GET',
        url: 'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/chapters/'+params.lines+'',
        headers: { 'api-key': 'f2179c8ed544cc833dd20e7bb4ae2a95' },

    };



    useEffect(() => {
        console.log('check here')
        axios.request(options).then(function (response) {
            const obj = {}

            console.log("ooooooooooo", response.data.data.content);
            x = (response.data.data.content);
            console.log(response.data.data);
            console.log("typeof--",typeof(x));

            
            setData(x)

        }).catch(function (error) {
            let obj = {};
            obj['meesage'] = 'error';
            setData(obj);
            console.error(error);
        })

    }, []);

    return (
        <>
            <strong>Response:</strong>

<div dangerouslySetInnerHTML={{__html: data}} >

            </div>

        </>
    );



}
export default Verses
