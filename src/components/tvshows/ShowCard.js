import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { Grid, Typography } from '@material-ui/core'

const getStyles = makeStyles(theme => ({
	card: {
		margin: '1.2em',
		borderRadius: 0,
		textAlign: 'center',
		width: '100%'
	},
	overview: {
		textAlign: 'left'
	},
	media: {
		height: '420px',
		backgroundSize: 'auto 100%'
	},
	cardInner: {
		display: 'flex'
	},
	info: {
		marginTop: '5em'
	}
}))

const ShowCard = props => {
	const classes = getStyles()

	const {name, image, popularity, overview, first_air_date} = props
	
	return (
		<Grid className={classes.card}>
			<Card className={classes.cardInner}>
				<Grid item xs={3}>
					<CardMedia image={image} item='true' className={classes.media} />
				</Grid>
				<Grid item xs={9} className={classes.info}>
					<CardHeader title={name} subheader={`First Air Date: ${first_air_date} | Popularity: ${popularity}`} />
					<CardContent>
						<Typography variant="body2" color="textSecondary" className={classes.overview}>
							{overview}
						</Typography>
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	)
}

export default ShowCard
