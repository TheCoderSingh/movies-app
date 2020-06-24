import React, { Component } from 'react'
import { getPopularMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies } from '../../services/api'
import Movie from './Movie'
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const getStyles = theme => ({
	category: {
		width: '150px'
	},
	container: {
		textAlign: 'center'
	}
})

class Movies extends Component {
	state = {
		movies: null,
		isLoading: false,
		value: 0
	}

	componentDidMount() {
		this.setState({
			isLoading: true
		})

		getNowPlayingMovies().then(
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

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})

		switch (event.target.value) {
			case 0:
				getNowPlayingMovies().then(
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
				break;
			case 1:
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
				break;
			case 2:
				getTopRatedMovies().then(
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
				break;
			case 3:
				getUpcomingMovies().then(
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
				break;
			default:
				break;
		}
	}

	render() {
		const { isLoading, movies, value } = this.state
		const { classes } = this.props

		return (
			<div className={classes.container}>
				{isLoading ? "Loading.." : <div>
					<FormControl className={classes.category}>
						<InputLabel>Category</InputLabel>
							<Select
								value={this.state.value}
								onChange={this.handleChange}
							>
								<MenuItem value={0}>now playing</MenuItem>
								<MenuItem value={1}>popular</MenuItem>
								<MenuItem value={2}>top rated</MenuItem>
								<MenuItem value={3}>upcoming</MenuItem>
							</Select>
					</FormControl>	
					<Movie movies={movies} value={value} />
				</div>}
			</div>
		)
	}
}

export default withStyles(getStyles)(Movies);
