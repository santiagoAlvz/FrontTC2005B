import React from 'react';
import PasswordEntry from './PasswordEntry.js';
import EmailEntry from './EmailEntry.js';
import MandatoryEntry from './MandatoryEntry.js';
import './App.css';

function App() {
  return(
    <div className="flexible">
    <MandatoryEntry id="nombre" label="Nombre" warning="Llenar este campo es obligatorio"/>
    <EmailEntry label="Correo Electrónico" warning="Correo electrónico no válido"/>
    <PasswordEntry/>
    </div>
  )
}

export default App;
