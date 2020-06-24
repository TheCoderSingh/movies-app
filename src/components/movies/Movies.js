import React, { Component } from 'react'
import { getPopularMovies } from '../../services/api'
import Movie from './Movie'

class Movies extends Component {
	state = {
		movies: this.props.movies,
		isLoading: false
	}

	componentDidMount() {
		this.setState({
			isLoading: true
		})

		// getPopularMovies().then(
		// 	movies => {
		// 		this.setState({
		// 			movies,
		// 			isLoading: false
		// 		})
		// 	},
		// 	error => {
		// 		alert('Error', `Error fetching movies: ${error}`)
		// 	}
		// )
	}

	render() {
		const { isLoading, movies } = this.state

		console.log(movies)
		console.log(this.props)
		return (
			<div>
				{isLoading ? "Loading.." : <Movie movies={movies} />}
			</div>
		)
	}
}

export default Movies;
