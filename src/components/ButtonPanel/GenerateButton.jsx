import React from 'react';
import Input from '../DisplayPanel/Input';

const GenerateButton = (props) => {
    // const handleChange = (event)=>{
    //     // let op=(document.getElementById('input').value).toString();
    //     if(event.target.value==='C'){
    //         // document.getElementById('input').value=op.slice(0,-1);
    //         setInput(input.slice(0,-1));
    //     }
    //     else{
    //         // document.getElementById('input').value=op+event.target.value;
    //         setInput(input+event.target.value);
    //     }
    // }
    //console.log(op);
    //console.log(input);
    return(
        <input className='button' type="button" value={props.value}  onClick={props.fn}/>
    );
}

export default GenerateButton;