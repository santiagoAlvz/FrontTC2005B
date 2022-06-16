import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Navbar } from '../components2/Navbar.js';

const Layout = () => {
  return (
    <>
      <Navbar>
        <ul>
          <li><Link to="/Registro">Registro</Link></li>
        </ul>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;
