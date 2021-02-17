import React from "react-dom";
import Currentconsole from '../Components/Console_Select_Landing.js';
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import psvr from '../Images/PS_VR.png';
import re7 from "../Images/Games/VR/RE7.png";
import ace from "../Images/Games/VR/ace.png";
import batman from "../Images/Games/VR/batman.png";
import saber from "../Images/Games/VR/beat.png";
import mega from "../Images/Games/VR/mega.jpg";
import Famousgames from "../Components/Console_Games.js";
import {vr} from "../Components/Console_data.js";


function PsVR(){
    const pcsvr =[re7,ace,batman,saber,mega]

    return(
        <>
        <ScrolltoTop />
        <Currentconsole ctitle="Playstation Vr" cpic={psvr}  />
        <Famousgames Pcontainer={pcsvr} Ccontainer={vr} />
        <HistorySelection />
        </>
    )
};

export default PsVR;