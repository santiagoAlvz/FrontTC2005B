import MandatoryEntry from './MandatoryEntry.js';
import { EntryContainer } from '../components2/EntryContainer.js';

export default class PasswordEntry extends MandatoryEntry {

	render(){
		return(
			<EntryContainer>
			<label>{this.props.label}<span>*</span></label>
			<input type="tel" onChange={this.verify}></input>
			<p>
				{this.state.valid ? "" : this.props.warning}
			</p>
			</EntryContainer>
		)
	}
}