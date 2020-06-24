import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({
	root: {
		margin: '5em 0',
		border: '1px solid'
	}
}))

const Movie = props => {
	const classes = getStyles()

	return (
		<div className='container'>
			<Grid container className={classes.root}>
				{props.movies ? props.movies.map(element => {
					const { id, title, poster_path, popularity, overview, release_date } = element
					
					return (
						<MovieCard
							id={id}
							key={id}
							title={title}
							image={'https://image.tmdb.org/t/p/original' + poster_path}
							popularity={popularity}
							overview={overview}
							release_date={release_date}
						/>
					)
				}) : null}
			</Grid>
		</div>
	)
}

export default Movie
