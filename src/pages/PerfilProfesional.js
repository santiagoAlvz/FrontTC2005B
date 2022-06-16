import React, { Component } from 'react';
import AcademicExperience from '../components/AcademicExperience.js'
import ExperienciaLaboral from '../components/ExperienciaLaboral.js'
import Skills from '../components/Skills.js'


export default class PerfilProfesional extends Component {
	render(){
		return(
			<div className="pageContent">
				<h1>Perfil Profesional </h1>
				<h2>Preparación Academica</h2>
				<AcademicExperience/>
				<h2>Experiencia Laboral</h2>
				<ExperienciaLaboral/>
				<h2>Habilidades</h2>
				<Skills/>
			</div>
		)
	}
}