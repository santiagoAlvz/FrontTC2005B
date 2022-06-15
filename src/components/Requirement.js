import React, { Component } from 'react';

export default class Requirement extends Component {	
	render(){
		
		const green = {
			color: '#6CB708'
		};

		const red = {
			color: '#E66371'
		};
		return(
			<li style={this.props.achieved ? green : red}>{this.props.text}</li>
		)
	}
}