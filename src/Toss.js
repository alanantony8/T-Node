import React, { useState, useEffect } from "react";
import Input from "./input";
const Home = () => {
    const [place, setPlace] = useState('');
    return <>
    <h1>TOSS</h1>
    <Input setPlace={setPlace} /></>
};

export default Home;