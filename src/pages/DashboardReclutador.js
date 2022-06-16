import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js';
import VacantAplications from '../components/VacantAplications.js'

export default class DashboardReclutador extends Component {
	static contextType = UserContext;
	state = {vacants: []}

	componentDidMount(){
		fetch("/vacante/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
			vacants: data.content}));
	}

	render(){
		return(
			<div>
			<>
			<h1>Dashboard Reclutador</h1>
			{this.state.vacants.length > 0
				? this.state.vacants.map(vacant => <VacantAplications key={vacant.idVacante} data={vacant}/>)
				: <p>No tienes Vacantes asociadas</p>}
			</>
			</div>
		)
	}
}