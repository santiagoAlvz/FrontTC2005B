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
          <li>Configuración</li>
          <li>Crear Solicitud</li>
          <li>Mi Perfil Profesional</li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default LayoutSolicitante;
