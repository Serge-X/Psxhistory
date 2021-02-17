import React from "react-dom";
import Currentconsole from '../Components/Console_Select_Landing.js';
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import pspPic from '../Images/PSP_handheld4.png';
import vania from "../Images/Games/PSP/castlevania.jpg";
import gear from "../Images/Games/PSP/guilty gear.jpg";
import hunter from "../Images/Games/PSP/monster hunter.png";
import pata from "../Images/Games/PSP/Patapon.png";
import pursuit from "../Images/Games/PSP/force.jpg";
import Famousgames from "../Components/Console_Games.js";
import {psp} from "../Components/Console_data.js";


function PSP(){

    const pscxp=[vania,gear,hunter,pata,pursuit];
    return(
        <>
        <ScrolltoTop />
        <Currentconsole ctitle="PlayStation Portable" cpic={pspPic} cadjust="adjustmentpsp" />
        <Famousgames Pcontainer={pscxp} Ccontainer={psp} />
        <HistorySelection />
        </>
    )
};

export default PSP;