import React from 'react'
import { Outlet, Link } from "react-router-dom";
import UserContext from '../contexts/UserContext.js';
import { Navbar } from '../components2/Navbar.js';
import { StyledPage } from '../components2/StyledPage.js';


const LayoutSolicitante = () => {
  const user =  React.useContext(UserContext);
  return (
    <StyledPage>
      <Navbar>
        <ul>
          <li><Link to="/reclutador">Solicitudes</Link></li>
          <li><Link to="/reclutador/vacante">Crear Vacante</Link></li>
          <li><Link to="/">Cerrar Sesión</Link></li>
        </ul>
      </Navbar>

      <header>
        <b>{user.user.name} {user.user.lname}</b>
      </header>

      <Outlet className="content"/>
    </StyledPage>
  )
};

export default LayoutSolicitante;
