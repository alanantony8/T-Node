import React, { useState ,useEffect} from "react";
import axios from "axios";
import Input from "./input";
import Output from "./output";

const App = () => {
  const [place, setPlace] = useState('');
  const [data,setData] =useState({});
  const baseURL = `https://api.weatherapi.com/v1/current.json?key=05ccd01d3f294845bc0193119221201&q=${place}&aqi=yes`;

  useEffect(() => {
    place !== "" &&
      axios
        .get(baseURL)
        .then((res) => {
         let obj={};
         obj['message'] = "success";
         obj['status'] = res.data.current.condition.text;
         obj['status_icon'] = res.data.current.condition.icon;
         obj['name'] = res.data.location.name;
         obj['region'] = res.data.location.region;
         obj['country'] = res.data.location.country;
         obj['lat'] = res.data.location.lat;
         obj['lon'] = res.data.location.lon;
         obj['localtime'] = res.data.location.localtime;
         obj['location'] = res.data.location.tz_id;
        // console.log(obj);
         setData(obj);
        })
        .catch((err) => {
          let obj={};
          obj['meesage'] = 'error';
          setData(obj);
          console.log("err");
        });
  }, [place]);
  return (
    <>
    <Input setPlace={setPlace} />
    <Output data={data}/>
    </>
  )
}
export default App;