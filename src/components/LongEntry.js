import MandatoryEntry from './MandatoryEntry.js';

export default class LongEntry extends MandatoryEntry {

	render(){
		return(
			<div className="entry-div">
			<label>{this.props.label}<span className="red">*</span></label>
			<textarea rows="5" onChange={this.verify}></textarea>
			<p className="red">
				{this.state.valid ? "" : this.props.warning}
			</p>
			</div>
		)
	}
}