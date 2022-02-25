
// import React, { useState, useEffect} from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
const axios = require('axios')

const Verses = () => {

    var options = {
        method: 'GET',
        url: 'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/verses/JHN.3.16\?fums-version\=3',
        //url:'https://fums.api.bible/f3?dId=aU-xGs0AapCyeJFbZI2Sv&sId=hnE8GAmFHgnOkdons4S_7&t=G0wBAIzTFfOihHXPxDWVP11I0rJQ_z9QU5sCgtZh6er79IC5WosCKQjCAM_fvl3xB7p9C3JHr-wZUSp2xz-etwPAvtiS83i3JaeymM3SfLV0ZekXmsS6Be1b1wyNMxwRFvRAiBSml0u7APZUoogrgVNQICHhj-04tUM6gmhGMh4obgOERDSJZj8iqc5XXwwFHiNs75bV87YEcuZusu2oZRK6Z4jmEVhh9TzeX_ueL6aZFp70kldT7YNzOk-nXkuIi7CKqbIpDg',
        headers: { 'api-key': 'f2179c8ed544cc833dd20e7bb4ae2a95' },

    };
    console.log('check here')
    axios.request(options).then(function (response) {
        const obj = {}
        console.log(response.data); 
        console.log("ooooooooooo",response.data.data.content);

    }).catch(function (error) {
        let obj = {};
        obj['meesage'] = 'error';
        
        console.error(" error la maire");
    })

    return(
        <>
        <strong>Response:</strong>

                    <div>
                        <p>
                        {response.data.data.content} 
                        
                        </p>
                        <p>
                        {/* {datum.nameLong} */}
                        </p>
                    </div> 
        
        </>
        
    );

}
Verses();

