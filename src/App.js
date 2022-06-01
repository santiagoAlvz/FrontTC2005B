import React from 'react';
import PasswordEntry from './PasswordEntry.js';
import PasswordCreateEntry from './PasswordCreateEntry.js';
import EmailEntry from './EmailEntry.js';
import MandatoryEntry from './MandatoryEntry.js';
import NonMandatoryEntry from './NonMandatoryEntry.js';
import './App.css';

function App() {
  return(
    <div className="flexible">
    <MandatoryEntry label="Nombre" warning="Llenar este campo es obligatorio"/>
    <NonMandatoryEntry label="Apellido Materno"/>
    <PasswordEntry label="Contraseña" warning="Por favor, coloque su contraseña"/>
    <EmailEntry label="Correo Electrónico" warning="Correo electrónico no válido"/>
    <PasswordCreateEntry/>
    </div>
  )
}

export default App;
