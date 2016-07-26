import * as action from '../action/contact';

const initialState = {};

/**
 *
 * @param state
 * @param action
 * @param params
 */
export const contact = (state = initialState, action, params) => {
	switch (action) {
		case action.ADD_CONTACT:
			return state;
			break;
		case action.REMOVE_CONTACT:
			return state;
			break;
		default:
			return state;
			break;
	}
};