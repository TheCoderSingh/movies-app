import React from 'react';
import './App.css';
import Container from './components/layout/Container';
import Movies from './components/movies/Movies';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className='App-title'>Movies App</h1>
			</header>
			<Container />
			<Movies />
		</div>
	);
}

export default App;
