import React from 'react';

export default class ContactAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: '',
			prenom: '',
			email: '',
			tel: ''
		}
	}

	/**
	 *
	 * @param e
	 * @param value
	 */
	onHandleChange(e, value) {
		switch (value) {
			case 'nom':
				this.setState({nom: e.target.value});
				break;
			case 'prenom':
				this.setState({prenom: e.target.value});
				break;
			case 'email':
				this.setState({email: e.target.value});
				break;
			case 'tel':
				this.setState({tel: e.target.value});
				break;
			default:
				break;
		}
	}

	validate() {

	}

	/**
	 *
	 * @param e
	 */
	addContact(e) {
		e.preventDefault();
		this.props.onAddContact(this.state);
	}

	render() {
		return (<div className="grid-block">
			<div className="grid-block vertical">
				<div className="grid-block shrink">
					<h2>Ajouter un Contact</h2>
				</div>
				<div className="grid-block">
					<form action="#" className="grid-block vertical">
						<div className="grid-content">
							<label htmlFor="nom">Nom :</label>
							<input type="text" id="nom"
								   value={this.state.nom}
								   onChange={(e)=>this.onHandleChange(e,'nom')}/>
						</div>
						<div className="grid-content">
							<label htmlFor="prenom">Prenom :</label>
							<input type="text" id="prenom"
								   value={this.state.prenom}
								   onChange={(e)=>this.onHandleChange(e,'prenom')}/>
						</div>
						<div className="grid-content">
							<label htmlFor="email">Email :</label>
							<input type="email" id="email"
								   value={this.state.email}
								   onChange={(e)=>this.onHandleChange(e,'email')}/>
						</div>
						<div className="grid-content">
							<label htmlFor="tel">Tel :</label>
							<input type="tel" id="tel"
								   value={this.state.tel}
								   onChange={(e)=>this.onHandleChange(e,'tel')}/>
						</div>
						<div className="grid-content">
							<input type="submit" onClick={(e)=> this.addContact(e)}/>
						</div>
					</form>
				</div>
			</div>
		</div>);
	}
}