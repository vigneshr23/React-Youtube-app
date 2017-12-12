import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

const API_KEY = 'AIzaSyBHIbpBik0uCt7UshN6TGhSAKhFzayNbXc';


// CREATE A NEW COMPONENT - PRODUCES SOME HTML
/*const App = function() {
	//console.log($('.container'));
	return <div>Hi!</div>;
}*/
/*const App = () => {
	return (
		<div>
		Enter Search Term: <SearchBar />
		<div>Another div with { this.props.name }</div>
		</div>
	);
}*/


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {videos: []};
		YTSearch({key: API_KEY}, (videos) => {
			console.log(videos);
			this.setState({videos});
		});
	}
	render() {
		return (
			<div>
			Enter Search Term: <SearchBar />
			<VideoDetail video={this.state.videos[3]} />
			<VideoList videos={this.state.videos} />
			</div>
		);
	}
}
/* Load html to DOM */
ReactDOM.render(<App />, document.querySelector('.container'));
