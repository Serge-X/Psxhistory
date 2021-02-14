import React from 'react';
import './Component.css';

function Consolehistory({ctitle, cpic, cadjust})
{
    return (
        <div id="Test">
            <div id="Leftside"><p> {ctitle} </p></div>
            <div id="Rightside"><img src={cpic} className={cadjust}></img></div>

        </div>
    )};

export default Consolehistory;