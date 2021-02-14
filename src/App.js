import React from 'react';
import HomePage from './Homepage.js';
import "./response.css";
import Playstation1 from './ConsolePages/Playstation1.js';
import Playstation2 from './ConsolePages/Playstation2.js';
import Playstation3 from './ConsolePages/Playstation3.js';
import Playstation4 from './ConsolePages/Playstation4.js';
import PSP from './ConsolePages/Playstation_Portable.js';
import PsVita from './ConsolePages/Playstation_Vita.js';
import PsMove from './ConsolePages/Playstation_Move.js';
import PsVR from './ConsolePages/Playstation_VR.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div  >
      <Router>
      <Switch>
      <Route path="/Psxhistory/"  exact component={HomePage}/>
      <Route path="/Playstation1"   component={Playstation1}/>
      <Route path="/Playstation2"   component={Playstation2}/>
      <Route path="/Playstation3"   component={Playstation3}/>
      <Route path="/Playstation4"   component={Playstation4}/>
      <Route path="/PSP"   component={PSP}/>
      <Route path="/PsVita"   component={PsVita}/>
      <Route path="/PsMove"   component={PsMove}/>
      <Route path="/PsVR"   component={PsVR}/>
      </Switch>
      </Router>
    </div>

);

}

export default App;
