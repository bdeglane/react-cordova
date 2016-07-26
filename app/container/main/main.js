import React from 'react';
import Header from '../../component/header/Header';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="test grid-frame">
			<div className="grid-block vertical">
				<div className="grid-block shrink">
					<Header title="Contact"/>
				</div>
				<div className="grid-block">
					{this.props.children}
				</div>
			</div>
		</div>);
	}
}