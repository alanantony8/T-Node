import React from 'react';


const Input = ({input}) => {

    return(
        <>
        <div>
            <form>
                <input 
                type="text" 
                name="input" 
                id="input"
                value={input}
                />
            </form>
        </div>


        </>
    );
}

export default Input;