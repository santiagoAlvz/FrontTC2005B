import React, { Component } from 'react';

import DataRow from '../components/DataRow.js'
import DataRowWithDetails from '../components/DataRowWithDetails.js'


export default class CrearSolicitud extends Component {
	state = {vacants: []}

	componentDidMount(){
		fetch("/vacante/").then(response => response.json()).then(data => this.setState({
			vacants: data.content}));
	}

	render(){
		return(
			<>
			<h1>Crear Solicitud </h1>
			{this.state.vacants.length > 0 ?
			<table>
				<thead>
					<tr className="Header">
					<th>ID Vacante</th>
					<th>Nombre Vacante</th>
					<th>Empresa</th>
					<th>Fecha Publicación</th>
					<th>Fecha Límite</th>
					</tr>
					{this.state.vacants.map(vacant => (<DataRowWithDetails info={vacant} details={['descripcion', 'requisitos']} appliable={true} applyAdress="/solicitud"/>))}
				</thead>
			</table> : <p>No hay ninguna vacante disponible activa</p>}
			</>
		)
	}
}