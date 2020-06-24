import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Categories from '../categories/Categories'

const getStyles = makeStyles(theme=> ({
	root: {
		flexGrow: 1
	},
	categories: {
		textAlign: 'center'
	}
}))

const Container = props => {
	const classes = getStyles()

	return (
		<div className={classes.categories}>
			<Paper className={classes.root}>
				<Tabs
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Movies" />
					<Tab label="Search" />
					<Tab label="TV" />
				</Tabs>
			</Paper>
			<Categories />
		</div>
	)
}

export default Container