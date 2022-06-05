import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js';

export default class DashboardReclutador extends Component {
	static contextType = UserContext;

	render(){
		return(
			<>
			<h1>Dashboard Reclutador</h1>
			<p>Has iniciado sesión como {this.context.user.name} {this.context.user.lname}</p>
			</>
		)
	}
}