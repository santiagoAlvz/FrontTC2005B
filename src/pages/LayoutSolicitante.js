import React from 'react'
import { Outlet, Link } from "react-router-dom";

const LayoutSolicitante = () => {
  return (
    <>
      <nav className="NavBar">
        <ul>
          <li>
            <Link to="/solicitante">DashboardSolicitante</Link>
          </li>
          <li>
            <Link to="/solicitante/configuracion">Configuración</Link>
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

      <Outlet />
    </>
  )
};

export default LayoutSolicitante;
