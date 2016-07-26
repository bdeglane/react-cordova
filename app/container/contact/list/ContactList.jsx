import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class ContactList extends React.Component {
	constructor(props) {
		super(props);
	}

	removeContact(e, contact) {
		e.preventDefault();
		console.log(contact);


		//this.props.removeContact(contact);
	}

	render() {

		let items = this.props.contacts.map((item, id)=> {
			return (
				<li key={id}>{item.nom} {item.prenom} <a href="#" onClick={(e,item)=> this.removeContact(e,item)}>remove</a>
				</li>
			);
		});

		return (<div className="grid-block">
			<ul>
				{items}
			</ul>
		</div>);
	}
}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		contacts: state.contact.contacts
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeContact: (param)=> {
			dispatch({type: 'REMOVE_CONTACT', param: param});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);