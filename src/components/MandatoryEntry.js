import React, { Component } from 'react';
import { EntryContainer } from '../components2/EntryContainer.js';

export default class MandatoryEntry extends Component {
	state = {text: "", valid: false}

	getText = () => {
		if(this.state.text.length > 0){
			return this.state.text;
		} return null;
	}

	verify = event => {
		var text =  event.target.value;
		this.setState({text: text});
		this.setState({valid: text.length > 0});
	}

	render(){
		return(
			<EntryContainer>
				<label>{this.props.label}<span>*</span></label>
				<input onChange={this.verify}></input>
				<p>
					{this.state.valid ? "" : this.props.warning}
				</p>
			</EntryContainer>
		)
	}
}