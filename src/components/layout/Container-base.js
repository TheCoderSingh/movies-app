import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Categories from '../categories/Categories'

class Container extends Component {
	state = {
		value: 0
	}

	render() {
		const handleChange = (event, newValue) => {
			this.setState({
				value: newValue
			})
		}

		return (
			<div>
				<Paper>
					<Tabs
						indicatorColor="primary"
						textColor="primary"
						indicatorColor="primary"
						centered
						onChange={handleChange}
						value={this.state.value}
					>
						<Tab label="Movies" />
						<Tab label="Search" />
						<Tab label="TV Shows" />
					</Tabs>
				</Paper>
				<Categories />
			</div>
		)
	}
}

export default Container
