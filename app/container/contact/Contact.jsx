import React from 'react';

export default class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}


	addContact(contact) {
		this.setState({contacts: this.state.contact.push(contact)});
	}

	render() {
		return (<div className="grid-block">
			{this.props.children}
		</div>);
	}
}