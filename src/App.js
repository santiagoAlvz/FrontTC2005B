import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importación de Páginas
import Registro from './pages/Registro.js';
import DashboardSolicitante from './pages/DashboardSolicitante.js';
import Home from './pages/Home.js';

//Importación de barras de navegación
import LayoutSolicitante from './pages/LayoutSolicitante.js';

import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/solicitante" element={<LayoutSolicitante/>}>
          <Route index element={<DashboardSolicitante/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
