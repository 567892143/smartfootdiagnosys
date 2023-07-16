
import React from "react";
import Plantardata from './plantarpressure';
import Landing from './landing';
import Patient from './patientsdata';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom' ;
function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Plantardata />} />
      <Route path="/main" exact element={<Landing />} />
      <Route  path="/patients" exact element={<Patient/>}/>

      </Routes>
      </Router>
    
  );
}

export default App;
