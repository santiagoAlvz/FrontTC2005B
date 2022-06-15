import React, {Component} from 'react'
import Alert from './Alert.js';
import UserContext from '../contexts/UserContext.js';

export default class DataRowWithDetails extends Component{

	static contextType = UserContext;
	state = {showDetails: false, enableAlert: false}

	show = () => {
		this.setState({showDetails: !this.state.showDetails});
	}

	apply = () => {
		const data = {id: this.context.user.id , vacante: this.props.info.idVacante};
		fetch("/solicitud", {method: 'POST', body: JSON.stringify(data),  headers: {'Content-Type': 'application/json'}})
			.then(response => response.json()).then(responseData => {
				if(responseData.message && responseData.message === "Correct"){
					this.setState({enableAlert: true, alert: "Se ha aplicado exitosamente a la vacante", alertType: "success"});
				} else this.setState({enableAlert: true, alert: "Ha ocurrido un error", alertType: "error"});
			});
	}

	render(){

		return(
			<>
			<tr>
				<td>{this.props.info.idVacante}</td>
				<td>{this.props.info.nombre}</td>
				<td>{this.props.info.nombreComercial}</td>
				<td>{this.props.info.fechaPublicacion}</td>
				<td>{this.props.info.fechaLimite}</td>
				<td><button onClick={this.show}>Mostrar detalles</button></td>
			</tr>
			<tr style={this.state.showDetails ? {backgroundColor: "lightblue"} : {display: "none"} }>
			<td colSpan={Object.keys(this.props.info).length + 1}>
				<h3>Descripción</h3>
				<p>{this.props.info.descripcion}</p>

				<h3>Requisitos</h3>
				<p>{this.props.info.requisitos}</p>

				<h3>Empresa</h3>
				<p><b>{this.props.info.nombreComercial}</b> ({this.props.info.nombreFiscal}).<br/> País: {this.props.info.pais}.<br/>Área: {this.props.info.area}</p>

			{this.props.appliable ? <button onClick={this.apply}>Aplicar</button> : null}
			{this.state.enableAlert ? <Alert message={this.state.alert} type={this.state.alertType}/> : null}
			</td>
			</tr>
			</>
			
		);
	}
}