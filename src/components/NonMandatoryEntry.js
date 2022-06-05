import React, { Component } from 'react';

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
			<div className="entry-div">
			<label>{this.props.label}</label>
			<input onChange={this.verify}></input>
			</div>
		)
	}
}