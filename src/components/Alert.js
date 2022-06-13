import React, { Component } from 'react';

export default class NonMandatoryEntry extends Component {

	render(){

		const error = {backgroundColor: '#ebb2ae', padding: '0.5em', borderRadius: '0.4em'};
		const success = {backgroundColor: '#bbeba4', padding: '0.5em', borderRadius: '0.4em'};
		return(
			<p style={this.props.type === "error" ? error: success}>{this.props.message}</p>

		)
	}
}