import React from "react-dom";
import Currentconsole from '../Components/Console_Select_Landing.js';
import HistorySelection from "../Homehistoryselct.js"
import ScrolltoTop from "../Components/Scrolltop.js";
import psvita from '../Images/ps_vita2.png';
import doa from "../Images/Games/VITA/doa5.png";
import wars from "../Images/Games/VITA/freedom.png";
import puzzle from "../Images/Games/VITA/lumines.jpg";
import star from "../Images/Games/VITA/phantasy.jpg";
import knight from "../Images/Games/VITA/valhalla.jpg";
import Famousgames from "../Components/Console_Games.js";
import {vita} from "../Components/Console_data.js";


function PsVita(){

    const pscv=[doa,wars,puzzle,star,knight]
    return(
        <>
        <ScrolltoTop />
        <Currentconsole ctitle="Playstation Vita" cpic={psvita} cadjust="adjustmentvita"/>
        <Famousgames Pcontainer={pscv} Ccontainer={vita} />
        <HistorySelection />
        </>
    )
};

export default PsVita;