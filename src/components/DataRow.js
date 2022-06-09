import React, {Component} from 'react'
import StatusBadge from './StatusBadge.js'

export default class DataRow extends Component{
	render(){

		return(
			<tr>
				{Object.keys(this.props.info).map(key => 
						<td>{key != this.props.status ? this.props.info[key]: <StatusBadge text={this.props.info[key]} style={this.props.statusStyle[this.props.info[key]]}/>}</td>
				)}
			</tr>
		);
	}
}