import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js';

export default class DashboardReclutador extends Component {
	static contextType = UserContext;

	render(){
		return(
			<div className="pageContent">
			<>
			<h1>Dashboard Reclutador</h1>
			</>
			</div>
		)
	}
}