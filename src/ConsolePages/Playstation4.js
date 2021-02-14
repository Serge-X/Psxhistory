import React from "react-dom";
import Currentconsole from "../Components/Console_Select_Landing.js";
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import ps4Pic from "../Images/ps4_console2.png";
import Blood from "../Images/Games/PSX4/Bloodborne.png";
import Spidey from "../Images/Games/PSX4/spiderman.png";
import Gravity from "../Images/Games/PSX4/gravityrush.jpg";
import Ghost from "../Images/Games/PSX4/ghost.png";
import Horizon from "../Images/Games/PSX4/horizon.jpeg";
import Famousgames from "../Components/Console_Games.js";
import {ps4} from "../Components/Console_data.js";

function Playstation4(){
    const pscx4=[Blood,Spidey,Gravity,Ghost,Horizon];
    return(
        <>
        <ScrolltoTop />
        <Currentconsole ctitle="Playstation 4" cpic={ps4Pic} cadjust={"adjustment4"} />
        <Famousgames Pcontainer={pscx4} Ccontainer={ps4} />
        <HistorySelection />
        </>
    )
};

export default Playstation4;