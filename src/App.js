import React from 'react';
import './App.css';
import Container from './components/layout/Container';
import Search from './components/search/Search';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className='App-title'>Movies App</h1>
			</header>
			<Search />
			<Container />
		</div>
	);
}

export default App;
