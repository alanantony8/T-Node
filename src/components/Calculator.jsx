import React, { useState } from 'react';
import NumberButtons from './ButtonPanel/NumberButtons';
import OperationButtons from './ButtonPanel/OperationButtons';
import Input from './DisplayPanel/Input'
import Output from './DisplayPanel/Output.jsx';
const Calculator = (props) => {
    const [input, setInput]=useState('');
    return(
        <div className='calculator'>
            <div className='display'><span><Input input={input}/></span><br/><span><Output input={input}/></span></div>
            <div className='button'><OperationButtons setInput={setInput}/><NumberButtons setInput={setInput}/></div>
        </div>
    );
}

export default Calculator;