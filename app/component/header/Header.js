import React from 'react';
import { Link } from 'react-router'

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<header className="grid-block">
			<div className="grid-block shrink brand">
				<h1>{this.props.title}</h1>
			</div>
			<div className="grid-block">
				<ul>
					<li><Link to="/list" activeClassName="active">list</Link></li>
					<li><Link to="/add" activeClassName="active">add</Link></li>
					<li><Link to="/single/0" activeClassName="active">single</Link></li>
				</ul>
			</div>
		</header>);
	}
}
