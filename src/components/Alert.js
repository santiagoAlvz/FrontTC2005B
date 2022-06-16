import React, { Component } from 'react';

export default class NonMandatoryEntry extends Component {

	render(){

		const error = {
			backgroundColor: '#E66371',
			padding: '0.5em',
			borderRadius: '15px',
			color: '#FFFFFF',
			textAlign: 'center'
		};

		const success = {
			backgroundColor: '#6CB708',
			padding: '0.5em',
			borderRadius: '15px',
			textAlign: 'center',
			color: '#FFFFFF'
		};

		return(
			<div style={this.props.type === "error" ? error: success}>{this.props.message}</div>

		)
	}
}