import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Ps4_Button from './Images/PS4_Logo_Blue.png';
import Ps1_Logo from './Images/new_ps1Logo2.png';
import Ps2_Logo from './Images/ps2_logo.png';
import Ps3_Logo from './Images/ps3_logo_general.png';
import Ps4_Logo from './Images/ps4_logo_plain.png';
import Ps4_Black_Button from './Images/PS4_Logo_Black.png';
import Ps_Move_Logo from './Images/PlayStation_Move_Logo.png';
import PSvr_Logo from './Images/psvr_logo.png';
import PsP_Logo from './Images/psp_logo.png';
import PSvita_Logo from './Images/PlayStation_Vita_logo.svg';


const imgalt1 =
[
    "ps1",
    "ps2",
    "ps3",
    "ps4"
    
];

const imgalt2=
[
    "psp",
    "vita",
    "move",
    "vr"
]

const consoleroute1=
[
    "Playstation1",
    "Playstation2",
    "Playstation3",
    "Playstation4"
    
];

const consoleroute2 =
[
    "PSP",
    "PsVita",
    "PsMove",
    "PsVR"
];

function HistorySelection()
{
    // Set up all states for switching console selction.
    const fakeconsolestate= ["Consolecontrol","handhelds"];
    const [cConsole, setConsole]= useState(fakeconsolestate[0]);
    const [centerPic, setCPic]=useState(Ps4_Button);
    const [leftPic, setLPic]=useState(Ps1_Logo);
    const [upPic, setUPic]=useState(Ps2_Logo);
    const [rightPic, setRPic]=useState(Ps3_Logo);
    const [downPic, setDPic]=useState(Ps4_Logo);
    
    //set up hooks for Link hook and alt attribute.
    const [routecontext, setRoute]= useState(consoleroute1);
    const [altimg, setAlt]= useState(imgalt1);
    //test hook
    // const [test1, setTest]= useState(imgalt1);
    
    const cswitch = (e) => {
            switch (cConsole) 
            {
                case "Consolecontrol":
                    setConsole(fakeconsolestate[1]);
                    setCPic(Ps4_Black_Button);
                    setLPic(PsP_Logo);
                    setUPic(PSvita_Logo);
                    setRPic(Ps_Move_Logo);
                    setDPic(PSvr_Logo);
                    setAlt(imgalt2);
                    setRoute(consoleroute2);
                    break;
                case "handhelds":
                    setConsole(fakeconsolestate[0]);
                    setCPic(Ps4_Button);
                    setLPic(Ps1_Logo);
                    setUPic(Ps2_Logo);
                    setRPic(Ps3_Logo);
                    setDPic(Ps4_Logo);
                    setAlt(imgalt1);
                    setRoute(consoleroute1);
                    break;
            
                default:
                    break;
            }

        };
    

    return(
        <div id="Selecthistory">
            <div className="Centeringtitle" >
                <p className="Centeringtitle" > Choose your console</p>
            </div>
            <div id={cConsole}>
                <img src={centerPic} className="Psbutton" onClick={cswitch} alt="Main Button"></img>
               <Link to={`/${routecontext[0]}`} > <img src={leftPic} id="ps1Logo" alt={altimg[0]} ></img></Link>
               <Link to={`/${routecontext[1]}`} > <img src={upPic} id="ps2Logo" alt={altimg[1]}  ></img></Link>
               <Link to={`/${routecontext[2]}`} > <img src={rightPic} id="ps3Logo" alt={altimg[2]}  ></img></Link>
               <Link to={`/${routecontext[3]}`} > <img src={downPic} id="ps4Logo" alt={altimg[3]}  ></img></Link>
            </div>
        </div>
    )};

    export default HistorySelection;
