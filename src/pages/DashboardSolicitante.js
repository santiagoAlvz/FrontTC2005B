import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js';

export default class DashboardSolicitante extends Component {
	static contextType = UserContext;
	
	render(){
		return(
			<>
			<h1>Dashboard Solicitante</h1>
			<p>Has iniciado sesión como {this.context.user.name} {this.context.user.lname}</p>
			</>
		);
	}
}