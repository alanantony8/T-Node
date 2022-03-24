import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { getThemeProps } from '@mui/system';
import { useNavigate } from "react-router-dom";

const Input = () => {
    let navigate = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const mystyle = {
        backgroundColor: "Yellow",
        height: "60%",

    }
    const mystyle1 = {
        backgroundColor: "Blue",
        height: "60%",
    }

    // const [headTail, setHeadTail] = useState("")
    const [toss, setToss] = useState("")
    const [status, setStatus] = useState("")
    const [check, setCheck] = useState(2);

    // const handleChange = (e) => {
    //     console.log(e, "mmmmmmmm");
    //     setToss(e)
    //     console.log(toss,"Yyyyyyyyyyyyyyyy");

    //     if (e == 'head' || e == 'head')
    //         setHeadTail(5 % 2 == 0 ? 'Tail' : 'Head')
    //     else
    //         setHeadTail(5 % 2 == 0 ? 'Head' : 'Tail')
    //     if ((toss == '1head' && headTail == 'Head') || (toss == '1tail' && headTail == 'Tail')) {
    //         setStatus("csk wins toss")
    //     }
    //     if ((toss == '1head' && headTail == 'Tail') || (toss == '1tail' && headTail == 'Head')) {
    //         setStatus("csk loss toss")
    //     }
    //     if ((toss == '2head' && headTail == 'Head') || (toss == '2tail' && headTail == 'Tail')) {
    //         setStatus("MI wins toss")
    //     }
    //     if ((toss == '2head' && headTail == 'Tail') || (toss == '2tail' && headTail == 'Head')) {
    //         setStatus("MI loss toss")
    //     }


    // }

    useEffect(() => {
        console.log('useEffect=====', toss)
    }, [toss]);


    let headTail = "";
    const handleChange = (e) => {
        console.log(check, "mmmmmmmm");
        console.log(toss, "Yyyyyyyyyyyyyyyy");

        if (e == 'head' || e == 'head')
            headTail = (5 % 2 == 0 ? 'Head' : 'Tail')
        else
            headTail = (5 % 2 == 0 ? 'Tail' : 'Head')

        if ((toss == '1head' && headTail == 'Head') || (toss == '1tail' && headTail == 'Tail')) {
            setCheck(1);
            setStatus("csk wins toss")
            
        }
        if ((toss == '1head' && headTail == 'Tail') || (toss == '1tail' && headTail == 'Head')) {
            setCheck(0);
            setStatus("csk looses toss")
        }
        if ((toss == '2head' && headTail == 'Head') || (toss == '2tail' && headTail == 'Tail')) {
            setCheck(0);

            setStatus("MI wins toss")
        }
        if ((toss == '2head' && headTail == 'Tail') || (toss == '2tail' && headTail == 'Head')) {
            setCheck(1);

            setStatus("MI looses toss")
        }
        console.log(check)

    }
    //button click to route
     const handleSubmit= (e) =>{
         console.log(e,"eeee");
        navigate("/result/"+check);
    }


    return (
        <div>

            <Grid container style={{ height: "100%" }}>
                <Grid item xs={6} >
                    <Item style={mystyle}>
                        <input type="radio" name="tossHead1" value="Head" onChange={() => setToss("1head")}
                            checked={toss === "1head" || toss === "2tail"} />Head<br />
                        <input type="radio" name="tossTail1" value="tail" onChange={() => setToss("1tail")}
                            checked={toss === "1tail" || toss === "2head"} />Tail</Item>
                </Grid>
                <Grid item xs={6} >
                    <Item style={mystyle1}>
                        <input type="radio" name="tossHead2" value="Head" onChange={() => setToss("2head")}
                            checked={toss === "1tail" || toss === "2head"} />Head<br />
                        <input type="radio" name="tossail2T" value="tail" onChange={() => setToss("2tail")}
                            checked={toss === "1head" || toss === "2tail"} />Tail</Item>
                </Grid>
                <pre>Choose the face on top of coin</pre>
                <pre><input type="radio" name="chooseToss" value="head" onChange={() => handleChange("head")} />H<br />
                    <input type="radio" name="chooseToss" value="tail" onChange={() => handleChange("tail")} />T<br /></pre>
            </Grid>

            {headTail && <h3>{headTail}</h3>}
            {status && <h4>{status}&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" name="tossHead2" value="Next"  onClick={() =>handleSubmit(check)} />
            </h4>}
        </div>

    )
}
export default Input;