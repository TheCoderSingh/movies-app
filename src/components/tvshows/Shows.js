import React, { Component } from 'react'
import { getPopularTvShows } from '../../services/api'
import Show from './Show'

class Shows extends Component {
	state = {
		shows: null,
		isLoading: false
	}

	componentDidMount() {
		this.setState({
			isLoading: true
		})

		getPopularTvShows().then(
			shows => {
				this.setState({
					shows,
					isLoading: false
				})
			},
			error => {
				alert('Error', `Error fetching movies: ${error}`)
			}
		)
	}

	render() {
		const { isLoading, shows } = this.state
		
		return (
			<div>
				{isLoading ? "Loading.." : <Show shows={shows} />}
			</div>
		)
	}
}

export default Shows
