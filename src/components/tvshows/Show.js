import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ShowCard from './ShowCard'

const getStyles = makeStyles(theme => ({
	root: {
		margin: '5em 0'
	}
}))

const Show = props => {
	const classes = getStyles()

	return (
		<div className='container'>
			<Grid container className={classes.root}>
				{props.shows ? props.shows.map(element => {
					const { id, name, poster_path, popularity, overview, first_air_date } = element
					
					return (
						<ShowCard
							id={id}
							key={id}
							name={name}
							image={'https://image.tmdb.org/t/p/original' + poster_path}
							popularity={popularity}
							overview={overview}
							first_air_date={first_air_date}
						/>
					)
				}) : null}
			</Grid>
		</div>
	)
}

export default Show
