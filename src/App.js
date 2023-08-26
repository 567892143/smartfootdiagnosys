
import React from "react";
import Plantardata from './plantarpressure';
import Landing from './landing';
import Patient from './patientsdata';

import Login from './login'; 
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom' ;
import Graphicaldata from './GraphicalData';

function App(){
  
  return (
    <Router>
    <Routes>
    
    <Route path="/" exact element={<Plantardata />} />
      <Route path="/main" exact element={<Landing />} />
      <Route path="/patients" exact element={<Patient />} />
      <Route path="/graphical-data" exact element={<Graphicaldata/>} />
      </Routes>
      </Router>
    
  );
}

export default App;
