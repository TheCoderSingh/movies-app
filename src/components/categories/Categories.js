import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

class Categories extends Component {
	state = {
		value: 1
	}

	render() {			
		const handleChange = (event) => {
			this.setState({
				value: event.target.value
			})
		};

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
