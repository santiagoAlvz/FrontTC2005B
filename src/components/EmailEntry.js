import MandatoryEntry from './MandatoryEntry.js';

export default class EmailEntry extends MandatoryEntry {
	
	verify = event => {

		var text = event.target.value

		this.setState({valid: text.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)});
		this.setState({text: text});
	}
}