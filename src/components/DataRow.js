import React, {Component} from 'react'
import StatusBadge from './StatusBadge.js'

export default class DataRow extends Component{
	render(){

		return(
			<>
			<tr>
				<td>{this.props.info.idSolicitud}</td>
				<td>{this.props.info.nombre}</td>
				<td>{this.props.info.nombreComercial}</td>
				<td>{this.props.info.fecha}</td>
				<td><StatusBadge text={this.props.info.estado} style={this.props.statusStyle[this.props.info.estado]}/></td>
			</tr>
			<tr style={this.props.info.estado === "Revisada" ? {backgroundColor: 'lightblue'} : {display: 'none'}}>
				<td colSpan="5">{this.props.info.comentarios}</td>
			</tr>
			</>
		);
	}
}