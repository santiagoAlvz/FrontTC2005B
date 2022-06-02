import React, { Component } from 'react';

import PasswordEntry from '../components/PasswordEntry.js';
import PasswordCreateEntry from '../components/PasswordCreateEntry.js';
import EmailEntry from '../components/EmailEntry.js';
import MandatoryEntry from '../components/MandatoryEntry.js';
import DateEntry from '../components/DateEntry.js';

export default class Registro extends Component {
	render(){
		return(
		<div>
			<h1>Registro</h1>
		    <div className="flexible">
			    <MandatoryEntry label="Nombre" warning="Llenar este campo es obligatorio"/>
			    <MandatoryEntry label="Apellido" warning="Llenar este campo es obligatorio"/>
			    <MandatoryEntry label="Apellido Materno" warning="Llenar este campo es obligatorio"/>
			    <EmailEntry label="Correo Electrónico" warning="La dirección de correo no cumple con el formato especificado"/>
			    <DateEntry label="Fecha de nacimiento" warning="Llenar este campo es obligatorio"/>
			    <MandatoryEntry label="Número de Teléfono" warning="Llenar este campo es obligatorio"/>
			    <PasswordCreateEntry/>
			    <PasswordEntry label="Confirme la contraseña" warning="Llenar este campo es obligatorio"/>
		    </div>
		    <button>Crear Cuenta</button>
	    </div>
	    )
	 }
}
