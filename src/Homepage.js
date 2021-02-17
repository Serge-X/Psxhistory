import React from 'react';
// import './App.css';
// import "./response.css";
import cloud from './Images/Cloud_Character.png'
import snake from './Images/Old_Solid_Snake_Character.png'
import Homeabout from './Homeabout.js';
import HistorySelection from './Homehistoryselct.js'



export const pages=["Othertesting", "Othertesting2"];
function HomePage() {

return(
    <div id="landingPage">
        <div className="Overlay">
            <div id="landingPageContainer">
                < img src={cloud} id="cloud" alt="cloud"/>
                < img src={snake} id="snake" alt ="snake" />
                <p id="landingPageTitle" >PlayStation <br/>  History</p>

            </div>
        </div>
        
    <Homeabout />
    <HistorySelection />

    </div>
)};

export default HomePage;