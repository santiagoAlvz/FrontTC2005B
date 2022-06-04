import React, { Component } from 'react';
import  { Navigate } from 'react-router-dom'
import EmailEntry from '../components/EmailEntry.js';
import PasswordEntry from '../components/PasswordEntry.js';
import UserContext from '../contexts/UserContext.js';


export default class Home extends Component {
	state = {redirect : false, route: ""}
	static contextType = UserContext;

	login = () => {
		
		fetch(`/persona/${this.password.getText()}-${this.email.getText()}`).then(result => result.json()).then(data => {
			if(data.id){
				if(data.user === "Reclutador"){
					this.context.setUser({id: data.id, name: data.name});
					this.setState({redirect : true, route: "/reclutador"});
				} else if(data.user === "Solicitante"){
					this.context.setUser({id: data.id, name: data.name});
					this.setState({redirect : true, route: "/solicitante"});
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
				{this.state.redirect ? <Navigate to={this.state.route}/> : null }
			</div>

		)
	}
}