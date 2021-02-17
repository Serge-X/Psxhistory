import React from "react-dom";
import Currentconsole from '../Components/Console_Select_Landing.js';
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import ps3Pic from '../Images/PS3_true3.png';
import Uncharted from "../Images/Games/PSX3/drake.jpeg";
import Killzone from "../Images/Games/PSX3/killzone2.jpg";
import Demon from "../Images/Games/PSX3/demonsouls.png";
import Infamous from "../Images/Games/PSX3/infamous.jpg";
import Little from "../Images/Games/PSX3/littleplanet.png";
import Famousgames from "../Components/Console_Games.js";
import {ps3} from "../Components/Console_data.js";


function Playstation3(){
    const psxc3=[Uncharted,Killzone,Demon,Infamous,Little];

    return(
        <>
        <ScrolltoTop />
        <Currentconsole cpic={ps3Pic} ctitle="Playstation 3" cadjust="adjustment3"/>
        <Famousgames Pcontainer={psxc3} Ccontainer={ps3} />
        <HistorySelection />
        </>
    )
};

export default Playstation3;