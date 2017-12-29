import React, { Component } from 'react';

/*const searchBar = () => {
	return <input />;
};*/

class SearchBar extends Component {
	constructor (props) {
		super(props);

		this.state = {term: ''};

		//this.clickHandler = this.clickHandler.bind(this);
		}

	render () {
		return (
			<div className="input-container text-center col-md-9">

				<input placeholder="Enter Search Term" value={ this.state.term } onChange={e => this.onInputChange(e.target.value)} />

				<button id="myBut" value="" onClick={ this.clickHandler }>Search</button>

				<div>{ this.state.term }</div>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	clickHandler = function (e) {
		console.log(e.target);
		console.log(e.target.previousElementSibling.innerHTML);
		// this.setState({term: e.target.previousElementSibling.innerHTML});
		console.log(this.state.term);
	}
}

export default SearchBar;
