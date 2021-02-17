import React, {useState} from "react";
// import {useSpring, animated,useTransition} from "react-spring";
// import {Spring} from "react-spring/renderprops";
import "./Component.css";
import '../App.css';
import background from "../Images/sony_background.png";
import arrow from "../Images/ARROW2.png";
import rightArrow from "../Images/ARROW2.png";

//pcontainer and Ccontainer is expecting an array to be passed in for the parameter
function Famousgames({Pcontainer, Ccontainer})
{
    //comment line below  is for testing
    // const Pcontainer=[FF7,GT2,tekken,MGS,RE1];
    const max=Pcontainer.length;
    // prop is used for animation purposed. Still testing
    // const prop=useSpring({opacity:1, from:{opacity:0}});
    
    const [count, setCount]=useState(0);


   

    const forward= () =>
    {
        if (count > Pcontainer.length-2) {
            setCount(0);
        } else{ setCount(count +1)};
    };
    const back= () =>
    {
        if (count < Pcontainer.length-max +1) {
            setCount(max-1);
        } else{ setCount(count -1)};
    };
    
    return(
        <div id="Famousbox">
            <div id="Fleft">
                <img src={background} className="bk" alt="background"></img>
                <div className="text">
                <p>{Ccontainer[count].text}</p>
                </div>
                <img src={arrow} className="arrowL" onClick={back} alt="larrow"></img>
                <img src={rightArrow} className="arrowR" onClick={forward} alt="rarrow"></img>
            </div>
            <div id="Mdivide" on></div>
            <div id="Rright">
                <p className={Ccontainer[count].extra}>{Ccontainer[count].title}</p>
                 <img  src={Pcontainer[count]}  className={Ccontainer[count].adjustment} alt="game pic" ></img>
            </div>

        </div>
    )};

export default Famousgames;