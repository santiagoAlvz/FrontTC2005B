import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from './pages/Registro.js';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';

import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Registro" element={<Registro/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
