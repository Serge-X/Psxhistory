import React from 'react';
import './App.css';
import FFX from './Images/FinalFantasyX_gameplay.jpg'
import DMC3 from './Images/dmc3_gameplay.jpg'
import MGS1 from './Images/MetalGear_gameplay2.jpg'
import Uncharted4 from './Images/uncharted_clip.gif'
import Ratchet from './Images/ratchetnclank_gameplay.jpg'



function Homeabout() {

        const testfunction =  (e) => { console.log(e.target.id)};
    return(

        <div id="Homeabout">
            <div className="Overlay">
                <div id="landingPageIContainer">
                    <div id="aboutTextContainer">
                        <p id="aboutText">A Journey into the legend of stellar videogames and Sony consoles</p>
                    </div>
                    <div id="aboutImageContainer">
                        <img src={FFX} id="FFX" alt="Final Fantasy" onClick={testfunction} />
                        <img src={Ratchet} id="Ratchet" alt="Ratchet and Clank"/>
                        <img src={MGS1} id="MGS1" alt="Metal Gear"/>
                        <img src={DMC3} id="DMC3" alt="Devil May Cry"/>
                        <img src={Uncharted4} id="Uncharted" alt="Uncharted"/>
                    </div>
                </div>
            </div>
            
        </div>
    )};

export default Homeabout;
