import React, { Component } from 'react';
import { EntryContainer } from '../components2/EntryContainer.js';

export default class NonMandatoryEntry extends Component {
	state = {text: ""}

	getText = () => {
		return this.state.text;
	}

	verify = event => {
		var text =  event.target.value;
		this.setState({text: text});
	}

	render(){
		return(
			<EntryContainer>
				<label>{this.props.label}</label>
				<input onChange={this.verify}></input>
			</EntryContainer>
		)
	}
}