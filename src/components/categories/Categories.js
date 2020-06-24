import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Movies from '../movies/Movies';
import { getPopularMovies, getNowPlayingMovies } from '../../services/api';

class Categories extends Component {
	state = {
		value: 1,
		movies: null
	}

	render() {
		const handleChange = (event) => {
			this.setState({
				value: event.target.value
			})

			switch(this.state.value) {
				case 0:
					getNowPlayingMovies().then(
						movies => {
							this.setState({
								movies,
							})
						},
						error => {
							alert('Error', `Error fetching movies: ${error}`)
						}
					)
				case 1:
					getPopularMovies().then(
						movies => {
							this.setState({
								movies,
							})
						},
						error => {
							alert('Error', `Error fetching movies: ${error}`)
						}
					)
			}

			return <Movies movies={this.state.movies} />
		}

		return (
			<FormControl>
				<InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={this.state.value}
						onChange={handleChange}
					>
						<MenuItem value={0}>now_playing</MenuItem>
						<MenuItem value={1}>popular</MenuItem>
						<MenuItem value={2}>top_rated</MenuItem>
						<MenuItem value={3}>upcoming</MenuItem>
					</Select>
			</FormControl>			
		)
	}
}

export default Categories
