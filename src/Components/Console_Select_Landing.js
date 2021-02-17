import React from 'react';
import './Component.css';
import '../App.css';


function Currentconsole({ctitle, cpic, cadjust})
{
    return (
        <div id="Test">
            <div id="Leftside"><p> {ctitle} </p></div>
            <div id="Rightside"><img src={cpic} className={cadjust} alt="rightpic"></img></div>

        </div>
    )};

export default Currentconsole;