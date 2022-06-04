import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js';

export default class DashboardReclutador extends Component {
	static contextType = UserContext;

	render(){
		return(
			<>
			<h1>Dashboard Reclutador</h1>
			<p>El usuario que inició sesión es: {this.context.user.id}, {this.context.user.name}</p>
			</>
		)
	}
}