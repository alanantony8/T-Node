import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import {map,reduce} from 'lodash';
import { useParams } from "react-router-dom";
import { textAlign } from '@mui/system';
let overallStatus={'mi':[],'csk':[]};

const Result = () => {
    let arr = [ 2, 3, 4, 5, 6,7];
    let batting_1 = ["Devon Conway", "Ruturaj Gaikwad", "Moeen Ali", "Robin Uthappa", "Ambati Rayudu", "Ravindra Jadeja", "MS Dhoni ", "Dwayne Bravo", "Deepak Chahar", "Rajvardhan Hangargekar", "Adam Milne"];
    let bowl_1 = ["Dwayne Bravo", "Deepak Chahar", "Rajvardhan Hangargekar", "Adam Milne"]
    let batting_2 = ["Rohit Sharma", "Ishan Kishan", "Suryakumar Yadav", "Tilak Verma ", "Kieron Pollard ", "Tim David", "Sanjay Yadav", "Jasprit Bumrah", "Tymal Mills", "Murugan Ashwin", "Daniel Sams"]
    let bowl_2 = ["Jasprit Bumrah", "Tymal Mills", "Murugan Ashwin", "Daniel Sams"]
    const [update, setUpdate] = useState(0)
    const [tossResult, setTossResult] = useState("")
    const[run,setRun]=useState(0)
    const [sec, setSec] = useState(0)
    const [over, setOver] = useState(1)
    const [bowl, setBowl] = useState([])
    const { id } = useParams();
    let x = '';

    //to change background color according to "batting" and "toss" peference(id=0 means MI,id=1 CSK)
    let bgColor;
    if (id == 0) {
        bgColor = "blue";
    }
    if (id == 0 && over > 6) {
        bgColor = "yellow";
    }
    if (id == 1) {
        bgColor = "yellow";
    }
    if (id == 1 && over > 6) {
        bgColor = "blue";
    }

//toss decision made by team(id=0 means MI,id=1 CSK).Displays decision made by team after toss
    const handleSubmit = (e) => {
        if (e == 0 && id == 1) {
            setTossResult("csk wins the toss and choose to bat first")
        }
        if (e == 1 && id == 1) {
            setTossResult("csk wins the toss and choose to Bowl first")
        }
        if (e == 0 && id == 0) {
            setTossResult("MI wins the toss and choose to Bat first")
        }
        if (e == 1 && id == 0) {
            setTossResult("MI wins the toss and choose to Bowl first")
        }
    }




    const handleFormSubmit = (e) => {
        const arr = []
        const firstInn=[];
        const secInn=[]
        let sumSecond=0
        let sumFirst =0;

        e.preventDefault();  
        setOver(over + 1) 
        // calculates runs scoreded 
        map(e.target,(i) => {         
            if (i.value >= 0 && i.value <= 6) {

                arr.push(Number(i.value))                     //players  runs stored per over
                if (over <= 6) {
                    firstInn.push(Number(i.value))            // first innings score
                }
                else {
                    secInn.push(Number(i.value))              //second inning score
                }
            }
        })
        const sum = arr.reduce((sum, presum) => sum + presum);    //calculating per over 
        if(over<=6){
         sumFirst = firstInn.reduce((sum, presum) => sum + presum);} //calculating total for first inning
        if(over>6){
         sumSecond = secInn.reduce((sum, presum) => sum + presum);}     //calculating total for second inning
        console.log(over, "over la");
        if (over <= 6) {
            if (e.target.value > 6 || update > 36) {
                alert('Invalid Score');
            }
            else if (id == 1) {
                overallStatus['csk'].push({'name':batting_1[over],'run': sum});
                console.log(batting_1[over], sum, 'runs scored ')                           //displays batting order with runs per over *1st inning
                alert(update)
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
            if (id == 0) {          
                overallStatus['mi'].push({'name':batting_2[over],'run': sum});              
                console.log(batting_2[over], sum, 'runs scored')                            //displays batting order with runs per over *1st inning
                localStorage.setItem('over', JSON.stringify(bowl));
                 setUpdate(0)
            }
        }
        else if (over > 6 && over <= 12) {
            
            setSec(sec + 1)
            if (e.target.value > 6 || update > 36) {
                alert('Invalid Score');
            }
            if (id == 0) {
                overallStatus['csk'].push({'name':batting_1[sec],'run': sum});          //displays batting order with runs per over *2nd inning
                console.log(batting_1[sec], sum, 'runs scored ',)
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
            if (id == 1) {
                overallStatus['mi'].push({'name':batting_2[sec],'run': sum});           //displays batting order with runs per over *2nd inning
                console.log(batting_2[sec], sum, 'runs scoredd')
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
        }
        if (over > 12) {
            console.log(sumFirst, "one---", sumSecond, "----two");
            console.log(overallStatus["mi"][run],"-------");                                    //match result *by calculating first and second innings scores
            if ((sumFirst > sumSecond && id == 0) || (sumFirst < sumSecond && id == 1)) { 
                console.log("MI Won");
            }
            else if ((sumFirst > sumSecond && id == 1) || (sumFirst < sumSecond && id == 0))
                console.log("csk Won");
        }
        console.log(overallStatus)
    }



    return (
        <div style={{ backgroundColor: bgColor }}>
            <form onSubmit={(e)=>handleFormSubmit(e)}>
                <input type="submit" key={'button'} name="bat" /><br />
                <input type="button" key={'cancel'} name="ball" value="Fielding" onClick={() => handleSubmit(1)} required />
                {arr.map((i) =><input type="text" name={i.toString()} key={`key-${i}`} />)}
                {tossResult}
                {update}
                {bowl.map(bowl => (
                    <li key={`result-${bowl}`} >{bowl.runs}</li>
                ))}
            </form>
        </div>

    )
}
export default Result;