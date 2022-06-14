import React, { Component } from 'react';
import UserContext from '../contexts/UserContext.js'
//import AcademicExperienceItem from './AcademicExperienceItem.js'


export default class Skills extends Component {
  state = {skills: []}
  static contextType = UserContext;

  componentDidMount(){
    fetch("/skills/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
      skills: data.content}));
  }

  updateList = () => {
    fetch("/skills/persona/"+this.context.user.id).then(response => response.json()).then(data => this.setState({
      skills: data.content}));
  }

  render(){
    return(
      <>
      <table>
        <thead>
          <tr className="Header">
          <th>Habilidad</th>
          <th>Nivel de dominio</th>
          </tr>
        </thead>
        <tbody>
          {this.state.skills.map(register => (<SkillsItem key={register.idSkills} info={register} updateList={this.updateList.bind(this)}/>))}
          <EditableRow updateList={this.updateList.bind(this)}/>
        </tbody>
      </table>
      </>
    );
  }
}

export class SkillsItem extends Component {

  renderSkillLevel(level){
    switch(level){
      case "1": return "Principiante";
      case "2": return "Intermedio";
      case "3": return "Avanzado";
      default: return level;
    }
  }

  deleteSkillsInfo = () => {
    fetch("/skills/"+this.props.info.idSkills, {method: 'DELETE'});
    this.props.updateList();
  }

  render(){
  return(
      <tr>
        <td>{this.props.info.habilidad}</td>
        <td>{this.renderSkillLevel(this.props.info.nivelDeDominio)}</td>
        <td><button onClick={this.deleteSkillsInfo}>Eliminar</button></td>
      </tr>
    );
  }
}

export class EditableRow extends Component {

  static contextType = UserContext;

  addSkillsInfo = () => {
    const data = {habilidad: document.getElementById("habilidad").value,
                  nivelDeDominio: document.getElementById("nivelDeDominio").value};

    fetch("/skills/persona/"+this.context.user.id, {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});
    this.props.updateList();
  }

  render(){
  return(
    <tr>
        <td><input id="habilidad"/></td>
        <td> <select name="nivelDeDominio" id="nivelDeDominio">
            <optgroup label="Nivel de dominio">
                <option value={1}>Principiante</option>
                <option value={2}>Intermedio</option>
                <option value={3}>Avanzado</option>
            </optgroup>
        </select> </td>
        <td><button onClick={this.addSkillsInfo}>Añadir</button></td>
      </tr>
    )
  }
}