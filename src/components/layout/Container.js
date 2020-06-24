import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Movies from '../movies/Movies';
import Shows from '../tvshows/Shows';
import Categories from '../categories/Categories'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div >
      	{value === index && (
        	<Box p={3}>
        		<Typography>{children}</Typography>
        	</Box>
      	)}
    </div>
  );
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const getStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	search: {
		textAlign: 'center'
	}
}))

export default function SimpleTabs() {
	const classes = getStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label="Movies" />
					<Tab label="Search" />
					<Tab label="TV Shows" />
				</Tabs>
			</AppBar>
			<Categories />
			<TabPanel value={value} index={0}>
				<Movies />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<h2 className={classes.search}>Please enter a search</h2>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Shows />
			</TabPanel>
		</div>
	)
}
