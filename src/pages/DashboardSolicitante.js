import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js';
import DataRow from '../components/DataRow.js'

export default class DashboardSolicitante extends Component {
	state = {aplications: []}
	static contextType = UserContext;

	componentDidMount(){
		fetch("/solicitud/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
			aplications: data.content}));
	}

	
	render(){

		const statusStyle = {"En Proceso": "yellowStatus", "Sin Revisar": "redStatus", "Revisada" : "greenStatus"};

		return(
			<div className="pageContent">
			<h1>Dashboard Solicitante</h1>

			{this.state.aplications.length > 0 ?
			<table>
				<thead>
					<tr className="Header">
					<th>ID Aplicación</th>
					<th>Nombre Vacante</th>
					<th>Empresa</th>
					<th>Fecha de Aplicación</th>
					<th>Status</th>
					</tr>
					{this.state.aplications.map(aplication => (<DataRow key={aplication.idSolicitud} info={aplication} status="estado" statusStyle={statusStyle}/>))}
				</thead>
			</table> : <p>No tienes ninguna solicitud activa</p>}
			</div>
		);
	}
}