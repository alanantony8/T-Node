import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { map, reduce } from 'lodash';
import { useParams } from "react-router-dom";
import { textAlign } from '@mui/system';
let overallStatus = { 'mi': [], 'csk': [] };

const Result = () => {
    let arr = [2, 3, 4, 5, 6, 7];
    let batting_1 = ["Devon Conway", "Ruturaj Gaikwad", "Moeen Ali", "Robin Uthappa", "Ambati Rayudu", "Ravindra Jadeja", "MS Dhoni ", "Dwayne Bravo", "Deepak Chahar", "Rajvardhan Hangargekar", "Adam Milne"];
    let bowl_1 = ["Dwayne Bravo", "Deepak Chahar", "Rajvardhan Hangargekar", "Adam Milne"]
    let batting_2 = ["Rohit Sharma", "Ishan Kishan", "Suryakumar Yadav", "Tilak Verma ", "Kieron Pollard ", "Tim David", "Sanjay Yadav", "Jasprit Bumrah", "Tymal Mills", "Murugan Ashwin", "Daniel Sams"]
    let bowl_2 = ["Jasprit Bumrah", "Tymal Mills", "Murugan Ashwin", "Daniel Sams"]
    const [update, setUpdate] = useState(0)
    const [tossResult, setTossResult] = useState("")
    const [run, setRun] = useState(0)
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

    const teams = [{ name: 'csk', choose: `${id}`, preferred: 'bat' }, { name: 'mi', choose: `${id}`, preferred: 'bat' }]
    const tossWinner = 1;
    //toss decision made by team(id=0 means MI,id=1 CSK).Displays decision made by team after toss
    const handleSubmit = (e) => {

        const found = teams.find((team) => team.choose == tossWinner)
        console.log("team", found);
        console.log(`${found.name} won the toss and chose to ${found.preferred} first`)
    }

    const handleOptionSubmit = (e) => {


        if (e.target.value == 'W') {
            console.log(sec, "sec");
            setSec(sec + 1);
        }
    }
    const handleFormSubmit = (e) => {
        const arr = []
        const playerRun = []
        const firstInn = [];
        const secInn = []
        let sumSecond = 0
        let sumFirst = 0;
        e.preventDefault();
        setOver(over + 1)
        // calculates runs scoreded 
        map(e.target.cars, (i) => {

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
        if (over <= 6) {
            sumFirst = firstInn.reduce((sum, presum) => sum + presum);
        } //calculating total for first inning
        if (over > 6) {
            sumSecond = secInn.reduce((sum, presum) => sum + presum);
        }     //calculating total for second inning
        console.log(over, "over la");
        if (over <= 6) {
            if (over>1 && (overallStatus['csk'][sec]['name'] == batting_1[sec]) ) {
                let result = overallStatus['csk'].map(person => ({ result: person.run + sum }));
                console.log(result, "runs");
                overallStatus['csk'][sec]['run']=result
                console.log(batting_1[sec], sum, 'runs scored ')      
            }


            else if (id == 1) {
                overallStatus['csk'].push({ 'name': batting_1[sec], 'run': sum, 'SplitRuns': arr });
                console.log(batting_1[sec], sum, 'runs scored ')                           //displays batting order with runs per over *1st inning
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
            if (id == 0) {
                overallStatus['mi'].push({ 'name': batting_2[sec], 'run': sum });
                console.log(batting_2[sec], sum, 'runs scored')                            //displays batting order with runs per over *1st inning
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
        }
        else if (over > 6 && over <= 12) {


            if (id == 0) {
                overallStatus['csk'].push({ 'name': batting_1[sec], 'run': sum });          //displays batting order with runs per over *2nd inning
                console.log(batting_1[sec], sum, 'runs scored ',)
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
            if (id == 1) {
                overallStatus['mi'].push({ 'name': batting_2[sec], 'run': sum });           //displays batting order with runs per over *2nd inning
                console.log(batting_2[sec], sum, 'runs scoredd')
                localStorage.setItem('over', JSON.stringify(bowl));
                setUpdate(0)
            }
        }
        if (over > 12) {
            console.log(sumFirst, "one---", sumSecond, "----two");
            console.log(overallStatus["mi"][run], "-------");                                    //match result *by calculating first and second innings scores
            if ((sumFirst > sumSecond && id == 0) || (sumFirst < sumSecond && id == 1)) {
                console.log("MI Won");
            }
            else if ((sumFirst > sumSecond && id == 1) || (sumFirst < sumSecond && id == 0))
                console.log("csk Won");
        }
        console.log(overallStatus)
        e.target.reset();
    }

    return (
        <div style={{ backgroundColor: bgColor }}>
            <form onSubmit={(e) => { handleFormSubmit(e) }}>

                <input type="submit" key={'button'} name="bat" /><br />
                <input type="reset" /><br />
                <input type="button" key={'cancel'} name="ball" value="Fielding" onClick={() => handleSubmit(1)} required />
                {arr.map((i) => <select id="cars" name="cars" key={`key-${i}`} onClick={(e) => { (handleOptionSubmit(e)) }}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="W">W</option>
                </select>)}
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