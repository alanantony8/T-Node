import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./input";
import Layout from "./Layout";
import Toss from "./Toss";
import Output from "./output";
import Result from "./Result";

const App = () => {
  const [place, setPlace] = useState('');
  const [data, setData] = useState({})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/toss" element={<Toss />}/>
          <Route path="/result/:id" element={<Result />}/>


          </Route>
        </Routes>
      </BrowserRouter>


      {/* <Output data={data}/> */}
    </>
  )
}

export default App;
