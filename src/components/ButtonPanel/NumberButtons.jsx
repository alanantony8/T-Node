import React from 'react';
import Input from '../DisplayPanel/Input';
import GenerateButton from './GenerateButton';

const NumberButtons = ({setInput}) => {
    let numbersToDisplay=['1','2','3','4','5','6','7','8','9','0','.'];
    const handleClick=(e)=>{
        setInput(prevInput=>prevInput+e.target.value);
    }
    return(
        <div>
            {numbersToDisplay.map((op)=><GenerateButton value={op} fn={handleClick}/>)}
        </div>
       
    );
}

export default NumberButtons;