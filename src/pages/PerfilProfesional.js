import React, { Component } from 'react';
import AcademicExperience from '../components/AcademicExperience.js'


export default class PerfilProfesional extends Component {
	render(){
		return(
			<div className="pageContent">
			<h1>Perfil Profesional </h1>
			<AcademicExperience/>
			</div>
		)
	}
}