import React from 'react';

const Input=({setPlace})=>{
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        setPlace(e.target[0].value)





    }
    return(
        <form onSubmit={handleSubmit}>
        <label>Enter place: </label><br/>
        <input type="text" id = "input1"/><br/>
        <button type="submit">click</button>
        </form>
    )
    }
export default Input;