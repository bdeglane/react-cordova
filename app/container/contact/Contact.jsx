import React from 'react';
import {map,clone} from 'lodash';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	/**
	 *
	 * @param contact
	 */
	removeContact(contact) {
		let index = this.state.contacts.indexOf(contact);
		if (index !== -1) {
			this.setState({contacts: this.state.contact.splice(contact, 1)});
		}
	}

	render() {
		return (<div className="grid-block">
			{this.props.children}
		</div>);
	}
}