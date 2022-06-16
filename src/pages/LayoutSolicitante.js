import React from 'react'
import { Outlet, Link } from "react-router-dom";
import UserContext from '../contexts/UserContext.js';

const LayoutSolicitante = () => {
    const user =  React.useContext(UserContext);
    return (
    <>
      <nav className="NavBar">
        <ul>
          <li>
            <Link to="/solicitante">Tablero</Link>
          </li>
          <li>
            <Link to="/solicitante/solicitud">Crear Solicitud</Link>
          </li>
          <li>
            <Link to="/solicitante/perfil">Mi Perfil Profesional</Link>
          </li>
          <li>
            <Link to="/">Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>

      <header>{user.user.name} {user.user.lname}</header>

      <Outlet />
    </>
    )
};

export default LayoutSolicitante;