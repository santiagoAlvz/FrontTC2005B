import React, { Component } from 'react';

export default class Requirement extends Component {
	render(){
		return(
			<p className={this.props.achieved ? 'green' : 'red'}>{this.props.text}</p>
		)
	}
}