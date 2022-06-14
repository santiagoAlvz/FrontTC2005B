import React, {Component} from 'react';

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
			? <table>
				<thead>
					<tr className="Header">
						<th>ID Aplicación</th>
						<th>Nombre</th>
						<th>Apellido Paterno</th>
						<th>Apellido Materno</th>
						<th>Teléfono</th>
						<th>Correo Electrónico</th>
					</tr>
					{this.state.aplications.map(aplication => (<SingleAplication key={aplication.idSolicitud} data={aplication}/>))}
				</thead>
			</table>
			: <i>No hay solicitudes para esta vacante</i>}
			</>
		)
	}
}

class SingleAplication extends Component {
	state = {showDetails: false, academicExperience: [], laboralExperience: [], skills:[]};

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

	show = () => {
		this.setState({showDetails: !this.state.showDetails})
		fetch("/solicitud/marcarEnProceso/"+this.props.data.idSolicitud, {method: 'PUT'});
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
				<td><button onClick={this.show}>Mostrar detalles</button></td>
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
			
			</td>
			</tr>
			</>
		)
	}
}