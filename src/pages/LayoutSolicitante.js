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
          <li><Link to="/solicitante">Tablero</Link></li>
          <li><Link to="/solicitante/solicitud">Crear Solicitud</Link></li>
          <li><Link to="/solicitante/perfil">Mi Perfil Profesional</Link></li>
          <li><Link to="/">Cerrar Sesión</Link></li>
        </ul>
      </Navbar>

      <header>
        <b>{user.user.name} {user.user.lname}</b>
      </header>

      <Outlet />
    </StyledPage>
    )
};

export default LayoutSolicitante;