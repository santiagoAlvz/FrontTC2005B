import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js'
import { Button } from '../components2/Button.js';
import { StyledTable } from '../components2/StyledTable.js';


export default class ExperienciaLaboral extends Component {
  state = {experience: []}
  static contextType = UserContext;

  componentDidMount(){
    fetch("/expLaboral/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
      experience: data.content}));
  }

  updateList = () => {
    fetch("/expLaboral/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
      experience: data.content}));
  }

  render(){
    return(
      <>
      <StyledTable>
        <thead>
          <tr>
            <th>Lugar de labor</th>
            <th>Nombre del puesto</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Actividades realizadas</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {this.state.experience.map(register => (<ExperienciaLaboralItem key={register.idExpLaboral} info={register} updateList={this.updateList.bind(this)}/>))}
          <EditableRow updateList={this.updateList.bind(this)}/>
        </tbody>
      </StyledTable>
      </>
    );
  }
}

class ExperienciaLaboralItem extends Component {

  deleteLaboralInfo = () => {
    fetch("/expLaboral/"+this.props.info.idExpLaboral, {method: 'DELETE'});
    this.props.updateList();
  }

  render(){
  return(
      <tr>
        <td>{this.props.info.lugarDeLabor}</td>
        <td>{this.props.info.nombreDelPuesto}</td>
        <td>{this.props.info.fechaInicio}</td>
        <td>{this.props.info.fechaFin}</td>
        <td>{this.props.info.actividadesRealizadas}</td>
        <td>{this.props.info.comentarios}</td>
        <td><Button onClick={this.deleteLaboralInfo}>Eliminar</Button></td>
      </tr>
    );
  }
}

class EditableRow extends Component {

  static contextType = UserContext;

  addExperienceInfo = () => {
    const data = {lugarDeLabor: document.getElementById("lugarDeLabor").value,
                  nombreDelPuesto: document.getElementById("nombreDelPuesto").value,
                  startDate: document.getElementById("workingStartDate").value,
                  endDate: document.getElementById("workingEndDate").value,
                  actividadesRealizadas: document.getElementById("actividadesRealizadas").value,
                  comments: document.getElementById("comentarios").value};

    fetch("/expLaboral/persona/"+this.context.user.id, {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
    this.props.updateList();
  }

  render(){
    return(
      <tr>
          <td><input id="lugarDeLabor"/></td>
          <td><input id="nombreDelPuesto"/></td>
          <td><input id="workingStartDate" type="date"/></td>
          <td><input id="workingEndDate" type="date"/></td>
          <td><input id="actividadesRealizadas"/></td>
          <td><textarea id="comentarios" rows="3"/></td>
          <td><Button onClick={this.addExperienceInfo}>Añadir</Button></td>
      </tr>
    )
  }
}