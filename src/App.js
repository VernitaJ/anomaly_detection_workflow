import "./App.css";
import React, {useState} from "react";
import Workflow from "./components/Workflow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artefact from "./components/Artefact";
import System from "./components/System";

import SystemMobile from "./components/SystemMobile";
import Links from "./components/Links";
// check if mobile or desktop

const isMobile = window.innerWidth <= 500;

const App = () => {
  return (
    <div className="App">
      <h1 style={{marginTop: "50px"}}>Smart Anomaly Detection Engineering Workflow Process</h1>
      <BrowserRouter>
      <Links />
        <Routes>
          <Route path="/" element={<Artefact />} />
          {isMobile ?  <Route path="/system" element={<SystemMobile />} /> :  <Route path="/system" element={<System />} />}
         
          <Route path="/documentation" element={<Workflow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
