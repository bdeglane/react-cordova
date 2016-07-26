import * as actions from '../constant/contact';

const initialState = {
	contacts: []
};

/**
 *
 * @param state
 * @param action
 */
export const contact = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_CONTACT:
			state.contacts.push(action.param);
			return state;
			break;
		case actions.REMOVE_CONTACT:
			let contact = state.contacts.find(action.param);
			if (contact != 'undefined')
				state.contacts.splice(contact, 1);
			return state;
			break;
		default:
			return state;
			break;
	}
};