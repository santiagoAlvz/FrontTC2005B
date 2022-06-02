import React, { Component } from 'react';
import EmailEntry from '../components/EmailEntry.js';
import PasswordEntry from '../components/PasswordEntry.js';


export default class Home extends Component {
	render(){
		return(
			<div>
				<h1>Página de Inicio</h1>
				<EmailEntry label="Correo Electrónico"/>
				<PasswordEntry label="Contraseña"/>
				<button>Entrar</button>
				<a href="/Registro">¿No estás dentro? Regístrate</a>
			</div>

		)
	}
}