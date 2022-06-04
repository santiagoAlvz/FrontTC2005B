import React from 'react'
import { Outlet, Link } from "react-router-dom";

const LayoutSolicitante = () => {
  return (
    <>
      <nav className="NavBar">
        <ul>
          <li>
            <Link to="/reclutador">Solicitudes</Link>
          </li>
          <li>
            <Link to="/reclutador/configuracion">Configuración</Link>
          </li>
          <li>
            <Link to="/reclutador/vacante">Crear Vacante</Link>
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
