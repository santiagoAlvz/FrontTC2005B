import MandatoryEntry from './MandatoryEntry.js';

export default class PasswordEntry extends MandatoryEntry {

	render(){
		return(
			<div className="entry-div">
			<label>{this.props.label}<span className="red">*</span></label>
			<input type="password" onChange={this.verify}></input>
			<p className="red">
				{this.state.valid ? "" : this.props.warning}
			</p>
			</div>
		)
	}
}