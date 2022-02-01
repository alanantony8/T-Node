import React from 'react';
import GenerateButton from './GenerateButton';
const OperationButtons = ({setInput}) => {
    let operators=['+','-','*','/','%','C'];
    const handleClick=(e)=>{
        if(e.target.value==='C'){
            setInput('');
        }
        else{
            setInput(prevInput=>prevInput+e.target.value);
        }
    }
    return(
        <div>
            {operators.map((op)=><GenerateButton value={op} fn={handleClick}/>)}
        </div>
    );
}

export default OperationButtons;