import React from 'react';
import Currentconsole from "../Components/Console_Select_Landing.js";
import ScrolltoTop from "../Components/Scrolltop.js";
import HistorySelection from "../Homehistoryselct.js"
import ps1Pic from "../Images/Ps1_console2.png";
import ff7 from "../Images/Games/PSX/Cloud_Character_2.png";
import gt from "../Images/Games/PSX/GranTurismo2.jpg";
import tekken from "../Images/Games/PSX/tekken3.jpg";
import MetalGear from "../Images/Games/PSX/MGS1.png";
import Resident from "../Images/Games/PSX/RE1.png";
import Famousgames from "../Components/Console_Games.js";
import {ps1} from "../Components/Console_data.js";

function Playstation1 () {  
    const psxc=[ff7,gt,tekken,MetalGear,Resident]
    return(
        <>
            <ScrolltoTop />
            <Currentconsole ctitle="PlayStation 1" cpic={ps1Pic} cadjust="adjustment1" />
            <Famousgames Pcontainer={psxc} Ccontainer={ps1}/>
            <HistorySelection />
        </>
    );}
export default Playstation1;