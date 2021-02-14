import React from "react-dom";
import Currentconsole from '../Components/Console_Select_Landing.js';
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import psmove from '../Images/PS_wand_2.png';
import chrome from "../Images/Games/MOVE/chrome.png";
import ninja from "../Images/Games/MOVE/ninja.png";
import time from "../Images/Games/MOVE/time.png";
import angry from "../Images/Games/MOVE/birds.png";
import mouse from "../Images/Games/MOVE/mickey.png";
import Famousgames from "../Components/Console_Games.js";
import {move} from "../Components/Console_data.js";

function PsMove(){
    const pcsxm=[chrome,ninja,time,angry,mouse];
    return(
        <>
        <ScrolltoTop />
        <Currentconsole ctitle="Playstation Move" cpic={psmove} cadjust="adjustmentmove"/>
        <Famousgames Pcontainer={pcsxm} Ccontainer={move}/>
        <HistorySelection />
        </>
    )
};

export default PsMove;