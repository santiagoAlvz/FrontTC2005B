
import React, {Component} from 'react'



export default class DataRow extends Component{
	render(){
		return(<p className={this.props.style}>{this.props.text}</p>)
	}
}