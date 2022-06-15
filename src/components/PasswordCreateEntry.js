import React, { Component } from 'react';

import Requirement from './Requirement.js';
import { EntryContainer } from '../components2/EntryContainer.js';
import { StyledPasswordCreate } from '../components2/StyledPasswordCreate.js';

function hasSymbols(letter){
	const specialChars = ['!','#','$','%','&','/','(',')','?','\\','\'','¡','¿','-','_','.',':',',',';'];
	return specialChars.includes(letter);
}

export default class PasswordCreateEntry extends Component {
	state = {text: "", length: false, upper: false, lower: false, number : false, symbols : false}

	getText = () => {
		if (this.state.length && this.state.upper && this.state.lower && this.state.number && this.state.number && this.state.symbols){
			return this.state.text;
		} else return null;
	}

	verify = event => {

		var text = event.target.value;
		this.setState({text: text});
		this.setState({length: false});
		this.setState({upper: false});
		this.setState({lower: false});
		this.setState({number: false});
		this.setState({symbols: false});

		if(text.length >= 10 && text.length <= 32){
			this.setState({length: true});
		} else this.setState({length: false});

		for (var i = 0; i < text.length; i++) {
		  var letter = text.charAt(i);

		  if(!isNaN(letter)){
		  	this.setState({number: true});
		  } else {
		  		if(hasSymbols(letter)){
		  			this.setState({symbols: true});

		  		} else {
			  		if(letter === letter.toUpperCase()){
						this.setState({upper: true});
					}
					if(letter === letter.toLowerCase()){
						this.setState({lower: true});
					}
				}
		  }
		}

	}
 
	render(){
		return(
		<div>
		<EntryContainer>
			<label>Ingrese su nueva contraseña<span>*</span></label>
			<input type="password" onChange={this.verify}></input>
		</EntryContainer>
		
		<StyledPasswordCreate>
			<b>Requisitos</b>
			<ul>
				<Requirement text="Longitud de entre 10 y 32 caracteres" achieved={this.state.length}/>
				<Requirement text="Mínimo una letra mayúscula" achieved={this.state.upper}/>
				<Requirement text="Mínimo una letra minúscula" achieved={this.state.lower}/>
				<Requirement text="Mínimo un número" achieved={this.state.number}/>
				<Requirement text="Mínimo un caracter especial" achieved={this.state.symbols}/>
			</ul>
		</StyledPasswordCreate>
		</div>
		)
	}
}