import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importación de las páginas
import Registro from './pages/Registro.js';
import DashboardSolicitante from './pages/Registro.js';
import Home from './pages/Home.js';

//Importación de las barras de navegación
import Layout from './pages/Layout.js';
import LayoutSolicitante from './pages/LayoutSolicitante.js';

import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Registro" element={<Registro/>}/>
        </Route>
        <Route path="/solicitante" element={<LayoutSolicitante/>}>
          <Route index element={<DashboardSolicitante/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
