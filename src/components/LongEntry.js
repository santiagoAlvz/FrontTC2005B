import MandatoryEntry from './MandatoryEntry.js';
import { EntryContainer } from '../components2/EntryContainer.js';

export default class LongEntry extends MandatoryEntry {

	render(){
		return(
			<EntryContainer>
				<label>{this.props.label}<span>*</span></label>
				<textarea rows="5" onChange={this.verify}></textarea>
				<p>
					{this.state.valid ? "" : this.props.warning}
				</p>
			</EntryContainer>
		)
	}
}