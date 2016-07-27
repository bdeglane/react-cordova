import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import contactApp from './reducer/index';
import Main from './container/main/Main';
import Contact from './container/contact/Contact.jsx';
import ContactList from './container/contact/list/ContactList.jsx';
import ContactAdd from './container/contact/add/ContactAdd.jsx';
import ContactSingle from './container/contact/single/ContactSingle.jsx';

import '../style/main.scss';

let store = createStore(contactApp);

function init() {

	alert('launch');

	ReactDom.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route component={Main}>
					<Route path="/index.html">
						<Route path="/" component={Contact}>
							<Route path="/list" component={ContactList}/>
							<Route path="/add" component={ContactAdd}/>
							<Route path="/single/:id" component={ContactSingle}/>
						</Route>
					</Route>
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
}

//if (window.location.protocol === 'file:') {
//	document.addEventListener('deviceready', init, false);
//} else {
//	init();
//}

//init();
document.addEventListener('deviceready', ()=>{
	alert('launch');

	ReactDom.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route component={Main}>
					<Route path="/index.html">
						<Route path="/" component={Contact}>
							<Route path="/list" component={ContactList}/>
							<Route path="/add" component={ContactAdd}/>
							<Route path="/single/:id" component={ContactSingle}/>
						</Route>
					</Route>
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
}, false);