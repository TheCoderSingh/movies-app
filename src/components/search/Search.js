import React, { Component } from 'react'
import { TextField, Select, FormControl, InputLabel, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { getMultiSearchResults } from '../../services/api'
import Movies from '../movies/Movies'

const getStyles = theme => ({
	root: {
		margin: '1em auto',
		textAlign: 'center'
	},
	formControl: {
		minWidth: 120,
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
		data: null
	}

	render() {
		const { classes } = this.props

		const handleInputChange = searchQuery => {
			searchQuery = searchQuery.target.value	
			this.setState({
				searchQuery
			})
		}

		const getData = e => {
			e.preventDefault()

			getMultiSearchResults(this.state.searchQuery).then(
				data => {
					this.setState({
						data
					})
					return (<Movies movies={data} />)
				},
				error => {
					alert('Error', `Something went wrong: ${error}`)
				}
			)
		}

		return (
			<form className={classes.root} onSubmit={getData}>
				<TextField className={classes.search} label="Search" variant="outlined" onChange={handleInputChange}/>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel htmlFor="outlined-age-native-simple">Search Type</InputLabel>
					<Select
						native
						value={0}
						// onChange={handleChange}
						label="Search Type"
						inputProps={{
							name: 'Search Type',
						}}
					>
						<option value={0}>multi</option>
						<option value={1}>movie</option>
						<option value={2}>tv</option>
					</Select>
				</FormControl>
				<Button type='submit' variant='outlined' className={classes.button}>Search</Button>
			</form>	
		)
	}
}

export default withStyles(getStyles)(Search)
