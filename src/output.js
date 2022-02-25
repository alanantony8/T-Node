import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../src/materialize.css';


const Output = () => {
    const params = useParams();
    console.log(params.chapter);

    const [data,setData] =useState('');
    var options = {
        method: 'GET',
        //url: 'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/verses/JHN.3.16\?fums-version\=3',
         url :'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/books/'+params.chapter+'/chapters',
        //url :'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/books',
        //https://fums.api.bible/f3?t=fumsToken&dId=deviceId&sId=sessionId&uId=userId
        //url:'https://fums.api.bible/f3?dId=aU-xGs0AapCyeJFbZI2Sv&sId=hnE8GAmFHgnOkdons4S_7&t=G0wBAIzTFfOihHXPxDWVP11I0rJQ_z9QU5sCgtZh6er79IC5WosCKQjCAM_fvl3xB7p9C3JHr-wZUSp2xz-etwPAvtiS83i3JaeymM3SfLV0ZekXmsS6Be1b1wyNMxwRFvRAiBSml0u7APZUoogrgVNQICHhj-04tUM6gmhGMh4obgOERDSJZj8iqc5XXwwFHiNs75bV87YEcuZusu2oZRK6Z4jmEVhh9TzeX_ueL6aZFp70kldT7YNzOk-nXkuIi7CKqbIpDg',
        headers: {'api-key': 'f2179c8ed544cc833dd20e7bb4ae2a95'},
        
    };


    
    useEffect(() =>{
        console.log('check here')
    axios.request(options).then(function (response) {
        const obj={}

        //console.log("books---",response.data.data);



        const allUsers = [];
        obj['message'] = "success";
        obj['chapter'] =response.data.data
    //    for(const id in response.data.data) {
    //     allUsers.push(response.data.data[id]);
    // }
    // console.log("+++++++="+JSON.stringify(allUsers) );
            const objArray={}
            const a=response.data.data
            
        
        // var processed = a.map(({ reference }) => ({ reference }));
        // console.log(processed);



        // console.log(response.data);
        //console.log((response.data.data.reference));
        //  const x=JSON.stringify(response.data.data)
        console.log(obj, 'obj')
        setData(obj)
    }).catch(function (error) {
        let obj={};
        obj['meesage'] = 'error';
        setData(obj);
        console.error(error);
    })

    },[]);

    useEffect(() => {
        console.log(data, 'useeffect')
    }, [data])


    console.log(data, 'data here');
    // const navigate = useNavigate();

    const navigate = useNavigate();
    return(
        <>
        <strong>Response:</strong><br/>
        {data?.chapter?.map(datum => (
                    

                    <div class="col s12 m7">
                    <h4 class="header">{datum.reference} -------
                    {datum.id}</h4>
                    <div class="card horizontal">
                    <div class="card-image">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <p>{datum.bibleId}</p>
                        </div>
                        <div class="card-action">
                        <a href="#"  onClick={()=>navigate('/verses/'+datum.id)}>view</a>
                        </div>
                    </div>
                    </div>
                    </div>
        ))}

        </>
    );
}

export default Output;