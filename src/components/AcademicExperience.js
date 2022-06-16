import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js'
import { Button } from '../components2/Button.js';
import { StyledTable } from '../components2/StyledTable.js';

//import AcademicExperienceItem from './AcademicExperienceItem.js'

export default class AcademicExperience extends Component {
  state = {experience: []}
  static contextType = UserContext;

  componentDidMount(){
    fetch("/expAcademica/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
      experience: data.content}));
  }

  updateList = () => {
    fetch("/expAcademica/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
      experience: data.content}));
  }

  render(){
    return(
      <>
      <StyledTable>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Institución</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {this.state.experience.map(register => (<AcademicExperienceItem key={register.idExpAcademica} info={register} updateList={this.updateList.bind(this)}/>))}
          <EditableRow updateList={this.updateList.bind(this)}/>
        </tbody>
      </StyledTable>
      </>
    );
  }
}

class AcademicExperienceItem extends Component {

  deleteAcademicInfo = () => {
    fetch("/expAcademica/"+this.props.info.idExpAcademica, {method: 'DELETE'});
    this.props.updateList();
  }

  render(){
  return(
      <tr>
        <td>{this.props.info.nombre}</td>
        <td>{this.props.info.fechaInicio}</td>
        <td>{this.props.info.fechaFin}</td>
        <td>{this.props.info.institucion}</td>
        <td>{this.props.info.comentarios}</td>
        <td><Button onClick={this.deleteAcademicInfo}>Eliminar</Button></td>
      </tr>
    );
  }
}

class EditableRow extends Component {

  static contextType = UserContext;

  addAcademicInfo = () => {
    const data = {name: document.getElementById("name").value,
                  startDate: document.getElementById("fechaInicio").value,
                  endDate: document.getElementById("fechaFin").value,
                  institution: document.getElementById("institucion").value,
                  comments: document.getElementById("comentarios").value};

    fetch("/expAcademica/persona/"+this.context.user.id, {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
    this.props.updateList();
  }

  render(){
  return(
    <tr>
        <td><input id="name"/></td>
        <td><input id="fechaInicio" type="date"/></td>
        <td><input id="fechaFin" type="date"/></td>
        <td><input id="institucion"/></td>
        <td><textarea id="comentarios" rows="3"/></td>
        <td><Button onClick={this.addAcademicInfo}>Añadir</Button></td>
    </tr>
    )
  }
}