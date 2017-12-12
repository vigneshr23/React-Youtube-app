import React, { Component } from 'react';

/*const searchBar = () => {
	return <input />;
};*/

class SearchBar extends Component {
	constructor (props) {
		super(props);

		this.state = {term: ''};

		this.clickHandler = this.clickHandler.bind(this);
		}

	render () {
		return (
			<div className="input-container">

				<input value = { this.state.term } onChange = { e => this.setState({ term: e.target.value }) } />

				<button id="myBut" value="" onClick={ this.clickHandler }>Click Me!</button>

				<div>{ this.state.term }</div>
			</div>
		)
	}
	clickHandler = function (e) {
		console.log(e.target);
		console.log(e.target.previousElementSibling.innerHTML);
		// this.setState({term: e.target.previousElementSibling.innerHTML});
		console.log(this.state.term);
	}
}

export default SearchBar;
