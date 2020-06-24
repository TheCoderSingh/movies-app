import React, { Component } from 'react'
import { TextField, Select, FormControl, InputLabel, Button, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { getMultiSearchResults, getMovieSearchResults, getTvSearchResults } from '../../services/api'

const getStyles = theme => ({
	root: {
		margin: '1em auto',
		textAlign: 'center'
	},
	formControl: {
		minWidth: 150,
	},
	search: {
		width: '45%',
		marginRight: '1%'
	},
	button: {
		backgroundColor: '#3f51b5',
		color: '#fff',
		minHeight: '56px',
		margin: '0 10px'
	}
})

class Search extends Component {
	state = {
		searchQuery: '',
		data: null,
		option: 0
	}

	render() {
		const { classes } = this.props

		const handleInputChange = searchQuery => {
			searchQuery = searchQuery.target.value	
			this.setState({
				searchQuery
			})
		}

		const handleChange = (e) => {
			this.setState({
				option: e.target.value
			})
		}

		const getData = e => {
			e.preventDefault()

			switch (this.state.option) {
				case 0:
					getMultiSearchResults(this.state.searchQuery).then(
						data => {
							this.setState({
								data
							})
							console.log(data)
						},
						error => {
							alert('Error', `Something went wrong: ${error}`)
						}
					)
					break
				case 1:
					getMovieSearchResults(this.state.searchQuery).then(
						data => {
							this.setState({
								data
							})
							console.log(data)
						},
						error => {
							alert('Error', `Something went wrong: ${error}`)
						}
					)
					break
				case 2:
					getTvSearchResults(this.state.searchQuery).then(
						data => {
							this.setState({
								data
							})
							console.log(data)
						},
						error => {
							alert('Error', `Something went wrong: ${error}`)
						}
					)
					break
				default:
					break
			}
		}

		return (
			<form className={classes.root} onSubmit={getData}>
				<TextField className={classes.search} label="Search" variant="outlined" onChange={handleInputChange}/>
				<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel>Search Type</InputLabel>
							<Select
								value={this.state.option}
								onChange={handleChange}
							>
								<MenuItem value={0}>multi</MenuItem>
								<MenuItem value={1}>movie</MenuItem>
								<MenuItem value={2}>tv</MenuItem>
							</Select>
					</FormControl>
				<Button type='submit' variant='outlined' className={classes.button}>Search</Button>
			</form>	
		)
	}
}

export default withStyles(getStyles)(Search)
