import React, { Component } from 'react';
import DateEntry from '../components/DateEntry.js'
import MandatoryEntry from '../components/MandatoryEntry.js'
import LongEntry from '../components/LongEntry.js'
import UserContext from '../contexts/UserContext.js';
import Alert from '../components/Alert.js';

export default class CrearVacante extends Component {

	state = {
		enableAlert: false
	}

	static contextType = UserContext;

	addVacant = () => {
		const data = {name: this.nom.getText(), desc: this.desc.getText(), expires: this.exp.getText(), id: this.context.user.id, requirements: this.req.getText()};

		for(var key in data){
			if(data[key] == null){
				this.setState({enableAlert: true, alert: "Hay campos obligatorios que faltan por llenar", alertType: "error"});
				return;
			}
		}
		/*Object.keys(data).map(key => {
			if(data[key] == null){
				this.setState({enableAlert: true, alert: "Hay campos obligatorios que faltan por llenar", alertType: "error"});
				return;
			}
		});*/

		fetch('/vacante',{method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})
			.then(response => response.json()).then(responseData => {
				if(responseData.message && responseData.message == "Correct"){
					this.setState({enableAlert: true, alert: "La vacante se ha creado exitosamente", alertType: "success"});
				} else this.setState({enableAlert: true, alert: "Ha ocurrido un error", alertType: "error"});
			});
	}

	render(){
		return(
			<>
			{this.state.enableAlert ? <Alert message={this.state.alert} type={this.state.alertType}/> : null}
			<h1>Crear Vacante</h1>
			<div>
				<MandatoryEntry ref={nom => this.nom = nom} label="Nombre de la vacante" warning="Campo obligatorio"/>
				<DateEntry ref={exp => this.exp = exp} label="Fecha de Expiración" warning="Campo obligatorio"/>
				<LongEntry ref={desc => this.desc = desc} label="Descripción de Vacante" warning="Campo obligatorio"/>
				<LongEntry ref={req => this.req = req} label="Requisitos" warning="Campo obligatorio"/>
			</div>
			<button onClick={this.addVacant}>Crear Vacante</button>
			</>
			//idvacante, reclutador, fechaP, fechaL, desc, requisitos
		)
	}
}