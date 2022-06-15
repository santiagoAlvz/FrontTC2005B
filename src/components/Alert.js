import React, { Component } from 'react';

export default class NonMandatoryEntry extends Component {

	render(){

		const error = {
			backgroundColor: '#E66371',
			padding: '0.5em',
			borderRadius: '15px',
			color: 'FFFFFF'
		};

		const success = {
			backgroundColor: '#6CB708',
			padding: '0.5em',
			borderRadius: '15px',
		};

		return(
			<div style={this.props.type === "error" ? error: success}>{this.props.message}</div>

		)
	}
}