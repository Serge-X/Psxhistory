import React from "react-dom";
import Currentconsole from '../Components/Console_Select_Landing.js';
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import ps2Pic from '../Images/PS2_Console2.png';
import Devil from "../Images/Games/PSX2/dmc1.png";
import Kiryu from "../Images/Games/PSX2/yakuza.png";
import Clank from "../Images/Games/PSX2/Ratchet.png";
import GTA from "../Images/Games/PSX2/gta3.jpg";
import Limit from "../Images/Games/PSX2/FFX.png";
import Famousgames from "../Components/Console_Games.js";
import {ps2} from "../Components/Console_data.js";


function Playstation2(){
    const pscx2=[Devil,Kiryu,Clank,GTA,Limit];

    return(
        <>
        <ScrolltoTop />
        <Currentconsole ctitle="Playstation 2" cpic={ps2Pic}/>
        <Famousgames Pcontainer={pscx2} Ccontainer={ps2} />
        <HistorySelection />
        </>
    )
};

export default Playstation2;