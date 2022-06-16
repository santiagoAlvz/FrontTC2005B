import React, { Component } from 'react';

import DataRowWithDetails from '../components/DataRowWithDetails.js'
import { StyledTable } from '../components2/StyledTable.js';

export default class CrearSolicitud extends Component {
	state = {vacants: []}

	componentDidMount(){
		fetch("/vacante/").then(response => response.json()).then(data => this.setState({
			vacants: data.content}));
	}

	render(){
		return(
			<div className="pageContent">
			<>
			<h1>Crear Solicitud </h1>
			{this.state.vacants.length > 0 ?
			<StyledTable>
				<thead>
					<tr>
					<th>ID Vacante</th>
					<th>Nombre Vacante</th>
					<th>Empresa</th>
					<th>Fecha Publicación</th>
					<th>Fecha Límite</th>
					</tr>
				</thead>
				<tbody>
					{this.state.vacants.map(vacant => (<DataRowWithDetails key={vacant.idVacante} info={vacant} details={['descripcion', 'requisitos']} appliable={true} applyAdress="/solicitud"/>))}
				</tbody>
			</StyledTable> : <p>No hay ninguna vacante disponible activa</p>}
			</>
			</div>
		)
	}
}