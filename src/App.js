import React from 'react';
import PasswordEntry from './PasswordEntry.js';
import PasswordCreateEntry from './PasswordCreateEntry.js';
import EmailEntry from './EmailEntry.js';
import MandatoryEntry from './MandatoryEntry.js';
import NonMandatoryEntry from './NonMandatoryEntry.js';
import DateEntry from './DateEntry.js';
import './App.css';

function App() {
  return(
    <div className="flexible">

    <MandatoryEntry label="Nombre" warning="Llenar este campo es obligatorio"/>
    <MandatoryEntry label="Apellido" warning="Llenar este campo es obligatorio"/>
    <NonMandatoryEntry label="Apellido Materno" warning="Llenar este campo es obligatorio"/>
    <EmailEntry label="Correo Electrónico" warning="La dirección de correo no cumple con el formato especificado"/>
    <DateEntry label="Fecha de nacimiento" warning="Llenar este campo es obligatorio"/>
    <MandatoryEntry label="Número de Teléfono" warning="Llenar este campo es obligatorio"/>
    <PasswordCreateEntry/>
    <PasswordEntry label="Confirme la contraseña" warning="Llenar este campo es obligatorio"/>
    </div>
  )
}

export default App;
