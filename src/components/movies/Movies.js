import React, { Component } from 'react'
import { getPopularMovies } from '../../services/api'
import Movie from './Movie'

class Movies extends Component {
	state = {
		movies: null,
		isLoading: false
	}

	componentDidMount() {
		this.setState({
			isLoading: true
		})

		getPopularMovies().then(
			movies => {
				this.setState({
					movies,
					isLoading: false
				})
			},
			error => {
				alert('Error', `Error fetching movies: ${error}`)
			}
		)
	}

	render() {
		const { isLoading, movies, config } = this.state
		
		return (
			<div>
				{isLoading ? "Loading.." : <Movie movies={movies} />}
			</div>
		)
	}
}

export default Movies;
