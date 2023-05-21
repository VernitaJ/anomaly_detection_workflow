import "./App.css";
import React, {useState} from "react";
import Workflow from "./components/Workflow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artefact from "./components/Artefact";
import System from "./components/System";
import Links from "./components/Links";

const App = () => {
  return (
    <div className="App">
      <h1 style={{marginTop: "50px"}}>Smart Anomaly Detection Engineering Workflow Process</h1>
      <BrowserRouter>
      <Links />
        <Routes>
          <Route path="/" element={<Artefact />} />
          <Route path="/system" element={<System />} />
          <Route path="/documentation" element={<Workflow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
