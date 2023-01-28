import React from 'react';
import Blhome from './pages/Blhome';
import Blresearch from './pages/Blresearch';
import Tabular from './pages/Tabular';
import Bluniversity from './pages/Bluniversity';
import Login from './pages/Login';
import Alhome from './pages/Alhome';
import Alresearch from './pages/Alresearch';
import Aluniversity from './pages/Aluniversity';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blhome />} />
        <Route path="/ResearchAreas" element={<Blresearch />} />
        <Route path="/Universities" element={<Bluniversity />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Alhome" element={<Alhome/>} />
        <Route path="/Alresearch" element={<Alresearch/>} />
        <Route path="/Aluniversity" element={<Aluniversity/>} />
        

      </Routes>
    </Router>
    
    
    
    
    
    
  );
}

export default App;
