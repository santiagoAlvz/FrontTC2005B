import React, { Component } from 'react';
import DateEntry from '../components/DateEntry.js'
import MandatoryEntry from '../components/MandatoryEntry.js'
import LongEntry from '../components/LongEntry.js'
import UserContext from '../contexts/UserContext.js';

export default class CrearVacante extends Component {

	static contextType = UserContext;

	addVacant = () => {
		const object = {name: this.nom.getText(), desc: this.desc.getText(), expires: this.exp.getText(), id: this.context.user.id, requirements: this.req.getText()};
		fetch('/vacante',{method: 'POST', body: JSON.stringify(object), headers: {'Content-Type': 'application/json'}});
	}

	render(){
		return(
			<>
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