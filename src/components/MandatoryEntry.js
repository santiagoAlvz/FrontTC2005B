import React, { Component } from 'react';

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
			<div className="entry-div">
			<label>{this.props.label}<span className="red">*</span></label>
			<input onChange={this.verify}></input>
			<p className="red">
				{this.state.valid ? "" : this.props.warning}
			</p>
			</div>
		)
	}
}