import React, { Component } from 'react';
import EmailEntry from '../components/EmailEntry.js';
import PasswordEntry from '../components/PasswordEntry.js';


export default class Home extends Component {
	state = {user: "", password: ""};

	login = (email, password) => {
		
		fetch(`/persona/${this.password.getText()}-${this.email.getText()}`).then(result => result.json()).then(data => {
			if(data.id){
				if(data.user == "Reclutador"){
					window.location.replace("/reclutador/");
				} else if(data.user == "Solicitante"){
					window.location.replace("/solicitante/");
				}
			} else alert("El usuario o la contraseña son incorrectos");
		});
	}

	render(){
		return(
			<div>
				<h1>Página de Inicio</h1>
				<EmailEntry ref={email => this.email = email} label="Correo Electrónico"/>
				<PasswordEntry ref={password => this.password = password} label="Contraseña"/>
				<button onClick={this.login}>Entrar</button>
				<a href="/Registro">¿No estás dentro? Regístrate</a>
			</div>

		)
	}
}