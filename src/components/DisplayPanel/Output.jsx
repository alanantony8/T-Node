import React from "react";


const Output = ({input}) => {
  let op=input
  try{
    op=eval(op.toString());
  }
  catch(err){

  }
  finally{
    return (
      <div>
        <input type="text" name="output" value={op} disabled={true} id="output" />
      </div>
    );
  }
  //const [output, setOutput] = useState('');
//   if (props.update !== undefined || props.update !== null) {
//     console.log(props.update);
//     setOutput(props.update);
//   }
//  console.log("*");
  
};

// const Output = (props) => {
//     console.log(props.update);

//     const [output,setOutput] = useState('');

//     if(props.update===undefined || props.update===null){
//         console.log("*");
//         return(
//             <div>
//                 <input
//                     type="text"
//                     name="output"
//                     defaultValue={output}
//                 />
//             </div>
//         );
//     }
//     if(props.update!==undefined || props.update!==null){
//         console.log(props.update);
//         setOutput(props.update);
//     }
// }

export default Output;