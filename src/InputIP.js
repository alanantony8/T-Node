import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

function InputIP(props){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
        let mtd=event.target.method;
        console.log(mtd)
        if(mtd === 'post'){
            let obj={};
            let col=event.target[0].value;
            let data=(event.target[1].value).split(',');
            let data1=data.map(d=>Number(d));
            console.log(data1);
            obj['col']=col;
            // for(let i=1;i<=data1.length;i++){
            //     obj['dt'+String(i)]=data1[i-1];
            // }
            obj['dt']=data1;
            console.log(obj)
            axios({
                'method':'POST',
                'url':'http://localhost:4000/elements',
                'data': obj,
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                let rs=res.data;
                if(rs['message']==='success'){
                    ReactDOM.render(<h5>Successfully Inserted</h5>,document.getElementById('insertid'));
                }
                else{
                    ReactDOM.render(<h5>Failed to insert (or) ID already exist</h5>,document.getElementById('insertid'));
                    }
              })
        //     fetch('http://localhost:5000/wifi', 
        //     {
        //           method: "GET", 
                  
        //       }
        //   ).then(response => response.json())
        //   .then(data => {
        //       console.log(data);
        //   })
          .catch((err) => {
              console.log(err);
              ReactDOM.render(<h5>Something went wrong</h5>,document.getElementById('insertid'));
              })

        }
        if(mtd === 'get' && event.target.length===4){
            let col=event.target[0].value;
            let data=event.target[1].value;
            let data1=Number(event.target[2].value);
            console.log(data1);
            // for(let i=1;i<=data1.length;i++){
            //     obj['dt'+String(i)]=data1[i-1];
            // }
            axios.get(`http://localhost:4000/elements/${col}/${data}/${data1}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                let rs=res.data;
                if(rs['message']==='success'){
                    ReactDOM.render(<h5>Successfully Updated</h5>,document.getElementById('updateid'));
                }
                else{
                    ReactDOM.render(<h5>Failed to Update (or) ID Doesn't exist</h5>,document.getElementById('updateid'));
                    }
              })
        //     fetch('http://localhost:5000/wifi', 
        //     {
        //           method: "GET", 
                  
        //       }
        //   ).then(response => response.json())
        //   .then(data => {
        //       console.log(data);
        //   })
          .catch((err) => {
              console.log(err);
              ReactDOM.render(<h5>Something went wrong</h5>,document.getElementById('updateid'));
              })

        }
        if(mtd === 'get' && event.target.length===3){
            let col=event.target[0].value;
            let data=event.target[1].value;
            // for(let i=1;i<=data1.length;i++){
            //     obj['dt'+String(i)]=data1[i-1];
            // }
            axios.get(`http://localhost:4000/elements/${col}/${data}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                let rs=res.data;
                if(rs['message']==='success'){
                    ReactDOM.render(<h5>Successfully Deleted</h5>,document.getElementById('deleteid'));
                }
                else{
                    ReactDOM.render(<h5>Failed to Delete (or) ID Doesn't exist</h5>,document.getElementById('deleteid'));
                    }
              })
        //     fetch('http://localhost:5000/wifi', 
        //     {
        //           method: "GET", 
                  
        //       }
        //   ).then(response => response.json())
        //   .then(data => {
        //       console.log(data);
        //   })
          .catch((err) => {
              console.log(err);
              ReactDOM.render(<h5>Something went wrong</h5>,document.getElementById('deleteid'));
              })

        }
        if(mtd === 'get' && event.target.length===2){
            let col=event.target[0].value;
            // for(let i=1;i<=data1.length;i++){
            //     obj['dt'+String(i)]=data1[i-1];
            // }
            axios.get(`http://localhost:4000/elements/${col}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                let rs=res.data;
                if(rs['message']==='failed'){
                    ReactDOM.render(<h5>Failed to Delete (or) ID Doesn't exist</h5>,document.getElementById('readid'));
                }
                else{
                    ReactDOM.render(<h5>{JSON.stringify(res.data)}</h5>,document.getElementById('readid'));
                    }
              })
        //     fetch('http://localhost:5000/wifi', 
        //     {
        //           method: "GET", 
                  
        //       }
        //   ).then(response => response.json())
        //   .then(data => {
        //       console.log(data);
        //   })
          .catch((err) => {
              console.log(err);
              ReactDOM.render(<h5>Something went wrong</h5>,document.getElementById('readid'));
              })

        }
    }

    if(props.name==="insert"){
        return (<form method="POST" onSubmit={handleSubmit}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='text' name={props.name+"1"} id={props.name+"1"}/>
            <input type='submit' value='Insert'/>
        </form>);
    }
    if(props.name==="update"){
        return (<form method='put' onSubmit={handleSubmit}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='text' name={props.name+"1"} id={props.name+"1"}/>
            <input type='text' name={props.name+"2"} id={props.name+"2"}/>
            <input type='submit' value='Update'/>
        </form>);
     }
    if(props.name==="delete"){
        return (<form method='DELETE' onSubmit={handleSubmit}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='text' name={props.name+"1"} id={props.name+"1"}/>
            <input type='submit' value='Delete'/>
        </form>);
    }
    if(props.name==="read"){
        return (<form method='GET' onSubmit={handleSubmit}>
            <input type='text' name={props.name} id={props.name}/>
            <input type='submit' value='Read'/>
        </form>);
    }   
}

export default InputIP;