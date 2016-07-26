import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Main from './container/main/Main';
import Contact from './container/contact/Contact.jsx';
import ContactList from './container/contact/list/ContactList.jsx';
import ContactAdd from './container/contact/add/ContactAdd.jsx';
import ContactSingle from './container/contact/single/ContactSingle.jsx';
import '../style/main.scss';


//document.addEventListener("deviceready", () => {
//	ReactDOM.render(
//		<Main/>,
//		document.getElementById('app'));
//
//}, false);

ReactDom.render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Contact}>
				<Route path="list" component={ContactList}/>
				<Route path="add" component={ContactAdd}/>
				<Route path="single/:id" component={ContactSingle}/>
			</Route>
		</Route>
	</Router>, document.getElementById('app'));