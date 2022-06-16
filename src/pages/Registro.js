import React, { Component } from 'react';

import PasswordEntry from '../components/PasswordEntry.js';
import PasswordCreateEntry from '../components/PasswordCreateEntry.js';
import EmailEntry from '../components/EmailEntry.js';
import MandatoryEntry from '../components/MandatoryEntry.js';
import NonMandatoryEntry from '../components/NonMandatoryEntry.js';
import DateEntry from '../components/DateEntry.js';
import PhoneEntry from '../components/PhoneEntry.js';
import Alert from '../components/Alert.js';
import { StyledRegistro } from '../components2/StyledRegistro.js';
import { Button } from '../components2/Button.js';
import { LinkButton } from '../components2/LinkButton.js';
import { EntryContainer } from '../components2/EntryContainer.js';

export default class Registro extends Component {
	state = {
		enableAlert: false
	}

	sexSelected = (event) => {
		this.setState({sex: event.target.value});
	}

	addAcount = () => {
		if(this.pa1.getText() === this.pa2.getText() || this.pa1.getText() == null){
			const data = {name: this.nom.getText(), last1: this.ap1.getText(), last2: this.ap2.getText(), email: this.ema.getText(), birth: this.nac.getText(), phone: this.num.getText(), password: this.pa1.getText(), state: this.civ.getText(), notify: this.not.getText(), sex: this.state.sex};
			if(data.password == null){
				this.setState({enableAlert: true, alert: "La contraseña no cumple con los requisitos", alertType: "error"});
				return;
			}

			for(var key in data){
				if(data[key] == null){
					this.setState({enableAlert: true, alert: "Hay campos obligatorios que faltan por llenar", alertType: "error"});
					return;
				}
			}

			fetch('/solicitante',{method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})
				.then(response => response.json()).then( data => {
					if(data.message && data.message === "Correct"){
						this.setState({enableAlert: true, alert: "Su cuenta se ha creado exitosamente", alertType: "success"});
					} else this.setState({enableAlert: true, alert: "Ha ocurrido un error", alertType: "error"});
				});

		} else
			this.setState({enableAlert: true, alert: "Las contraseñas no son iguales", alertType: "error"});
	}

	render(){

		return(
		<StyledRegistro>
			<div-reg>
				{this.state.enableAlert ? <Alert message={this.state.alert} type={this.state.alertType}/> : null}
				<h1>Registro</h1>
				<MandatoryEntry ref={nom => this.nom = nom} label="Nombre(s)" warning="Llenar este campo es obligatorio"/>
				<MandatoryEntry ref={ap1 => this.ap1 = ap1} label="Apellido Paterno" warning="Llenar este campo es obligatorio"/>
				<NonMandatoryEntry ref={ap2 => this.ap2 = ap2} label="Apellido Materno"/>
				<EntryContainer>
					<label warning="Llenar este campo es obligatorio">Sexo<span>*</span></label>
					<form>
						<label-radio for="male">Masculino
							<input type="radio" value="M" id="male"
								onChange={this.sexSelected} name="gender" />
						</label-radio>
						<label-radio for="female">Femenino
							<input type="radio" value="F" id="female"
								onChange={this.sexSelected} name="gender"/>
						</label-radio>
					</form>
				</EntryContainer>
				<EmailEntry ref={ema => this.ema = ema} label="Correo Electrónico" warning="La dirección de correo no cumple con el formato especificado"/>
				<DateEntry ref={nac => this.nac = nac} label="Fecha de nacimiento" warning="Llenar este campo es obligatorio"/>
				<PhoneEntry ref={num => this.num = num} label="Número de Teléfono" warning="Llenar este campo es obligatorio"/>
				<NonMandatoryEntry ref={civ => this.civ = civ} label="Estado Civil"/>
				<DateEntry ref={not => this.not = not} label="Enviar notificaciones desde el"/>
				<PasswordCreateEntry ref={pa1 => this.pa1 = pa1}/>
				<PasswordEntry ref={pa2 => this.pa2 = pa2} label="Confirme la contraseña" warning="Llenar este campo es obligatorio"/>
				<Button onClick={this.addAcount}>Crear Cuenta</Button>
				<LinkButton href="/">Volver al inicio</LinkButton>
			</div-reg>
		</StyledRegistro>
	    )
	 }
}
