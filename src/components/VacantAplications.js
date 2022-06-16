import React, {Component} from 'react';
import Alert from '../components/Alert.js';
import { Button } from '../components2/Button.js';
import { StyledTable } from '../components2/StyledTable.js';

export default class VacantAplications extends Component{
	state = {aplications: []};

	componentDidMount(){
		fetch("/solicitud/vacante/"+this.props.data.idVacante).then(response => response.json()).then(data => this.setState({
			aplications: data.content}));
	}

	render(){

		return(
			<>
			<h2>{this.props.data.nombre} (ID Vacante: {this.props.data.idVacante}, Fecha de Expiración: {this.props.data.fechaLimite})</h2>
			
			{this.state.aplications.length > 0
			? <StyledTable>
				<thead>
					<tr>
						<th>ID Aplicación</th>
						<th>Nombre</th>
						<th>Apellido Paterno</th>
						<th>Apellido Materno</th>
						<th>Teléfono</th>
						<th>Correo Electrónico</th>
					</tr>
				</thead>
				<tbody>
					{this.state.aplications.map(aplication => (<SingleAplication key={aplication.idSolicitud} data={aplication}/>))}
				</tbody>
			</StyledTable>
			: <i>No hay solicitudes para esta vacante</i>}
			</>
		)
	}
}

class SingleAplication extends Component {
	state = {showDetails: false,
		academicExperience: [],
		laboralExperience: [],
		skills:[],
		enableAlert: false,
		comment: ""
	};

	componentDidMount(){
	    fetch("/expAcademica/persona/"+this.props.data.idPersona).then(response => response.json())
	    	.then(data => this.setState({academicExperience: data.content}));
	    fetch("/expLaboral/persona/"+this.props.data.idPersona).then(response => response.json())
	    	.then(data => this.setState({laboralExperience: data.content}));
	    fetch("/skills/persona/"+this.props.data.idPersona).then(response => response.json())
	    	.then(data => this.setState({skills: data.content}));
	}

	renderSkillLevel(level){
	    switch(level){
	      case "1": return "Principiante";
	      case "2": return "Intermedio";
	      case "3": return "Avanzado";
	      default: return level;
	    }
	  }

	markAsChecked = () => {
		if(this.state.comment === "Personalizado"){
			const comment = document.getElementById("personalizedComment").value;
			if(comment.length > 0){
				const data = {comments: comment};
				fetch("/solicitud/marcarRevisada/"+this.props.data.idSolicitud,{method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
			} else {
				this.setState({enableAlert: true, alert: "Ingresar un comentario es obligatorio", alertType: "error"});
			}
		} else {
			const data = {comments: this.state.comment};
			fetch("/solicitud/marcarRevisada/"+this.props.data.idSolicitud,{method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
		}
		
		
	}

	show = () => {
		this.setState({showDetails: !this.state.showDetails})
		fetch("/solicitud/marcarEnProceso/"+this.props.data.idSolicitud, {method: 'PUT'});
	}

	commentChanged = (event) => {
		this.setState({comment: event.target.value});
	}

	render(){
		return(
			<>
			<tr>
				<td>{this.props.data.idSolicitud}</td>
				<td>{this.props.data.nombre}</td>
				<td>{this.props.data.primerApellido}</td>
				<td>{this.props.data.segundoApellido}</td>
				<td>{this.props.data.telefono}</td>
				<td>{this.props.data.correo}</td>
				<td><Button onClick={this.show}>Mostrar detalles</Button></td>
			</tr>
			<tr style={this.state.showDetails ? {backgroundColor: "lightblue"} : {display: "none"}}>
				<td colSpan="7">
				{this.state.academicExperience.length > 0
					? 	<>
						<h3>Preparación Academica</h3>
						<ul>
						{this.state.academicExperience.map(register =>
							<li><b>{register.nombre}</b> por <b>{register.institucion}</b> ({register.fechaInicio} - {register.fechaFin}). {register.comentarios}</li>
						)}
						</ul>
						</>
					: null}

				{this.state.laboralExperience.length > 0
					? 	<>
						<h3>Experiencia Laboral</h3>
						<ul>
						{this.state.laboralExperience.map(register =>
							<li><b>{register.nombreDelPuesto}</b>  para <b>{register.lugarDeLabor}</b> ({register.fechaInicio} - {register.fechaFin}). Realizó {register.actividadesRealizadas}. {register.comentarios}</li>
						)}
						</ul>
						</>
					: null}

				{this.state.skills.length > 0
					? 	<>
						<h3>Habilidades</h3>
						<ul>
						{this.state.skills.map(register =>
							<li>{register.habilidad} ({this.renderSkillLevel(register.nivelDeDominio)})</li>
						)}
						</ul>
						</>
					: null}

				{this.state.skills.length === 0 && this.state.laboralExperience.length === 0 && this.state.academicExperience.length === 0
					? <i>No hay Información Profesional que mostrar</i> : null}

				{this.state.enableAlert ? <Alert message={this.state.alert} type={this.state.alertType}/> : null}
				
				<div className="flexible">
				<p>Comentarios</p>
				<select onChange={this.commentChanged}>
					<option value="Gracias por tu solicitud, entraremos en contacto contigo pronto">Gracias por tu solicitud, entraremos en contacto contigo pronto</option>
					<option value="Gracias por tu solicitud, lamentablemente, estamos buscando otras opciones">Gracias por tu solicitud, lamentablemente, estamos buscando otras opciones</option>
					<option value="Gracias por tu interés, lamentablemente, la posición para la que aplicaste ya fue ocupada">Gracias por tu interés, lamentablemente, la posición para la que aplicaste ya fue ocupada</option>
					<option value="Personalizado">Personalizado</option>
				</select>
				<input id="personalizedComment" style={ this.state.comment === "Personalizado" ? {} : {display: 'none'}}></input>
				</div>
				<Button onClick={this.markAsChecked}>Marcar como Revisada</Button>

				
				</td>
			</tr>
			</>
		)
	}
}