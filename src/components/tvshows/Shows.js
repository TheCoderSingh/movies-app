import React, { Component } from 'react'
import { getPopularTvShows, getTopRatedTvShows, getOnTheAirTvShows, getAiringTodayTvShows } from '../../services/api'
import Show from './Show'
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

class Shows extends Component {
	state = {
		shows: null,
		isLoading: false,
		value: 0
	}

	componentDidMount() {
		this.setState({
			isLoading: true
		})
		
		getAiringTodayTvShows().then(
			shows => {
				this.setState({
					shows,
					isLoading: false
				})
			},
			error => {
				alert('Error', `Error fetching shows: ${error}`)
			}
		)
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})

		switch (event.target.value) {
			case 0:
				getAiringTodayTvShows().then(
					shows => {
						this.setState({
							shows,
							isLoading: false
						})
					},
					error => {
						alert('Error', `Error fetching shows: ${error}`)
					}
				)
				break;
			case 1:
				getOnTheAirTvShows().then(
					shows => {
						this.setState({
							shows,
							isLoading: false
						})
					},
					error => {
						alert('Error', `Error fetching shows: ${error}`)
					}
				)
				break;
			case 2:
				getPopularTvShows().then(
					shows => {
						this.setState({
							shows,
							isLoading: false
						})
					},
					error => {
						alert('Error', `Error fetching shows: ${error}`)
					}
				)
				break;
			case 3:
				getTopRatedTvShows().then(
					shows => {
						this.setState({
							shows,
							isLoading: false
						})
					},
					error => {
						alert('Error', `Error fetching shows: ${error}`)
					}
				)
				break;
			default:
				break;
		}
	}

	render() {
		const { isLoading, shows, value } = this.state
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
								<MenuItem value={0}>airing today</MenuItem>
								<MenuItem value={1}>on the air</MenuItem>
								<MenuItem value={2}>popular</MenuItem>
								<MenuItem value={3}>top rated</MenuItem>
							</Select>
					</FormControl>	
					<Show shows={shows} value={value} />
				</div>}
			</div>
		)
	}
}

export default withStyles(getStyles)(Shows)
