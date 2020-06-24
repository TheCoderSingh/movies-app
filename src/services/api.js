import axios from 'axios'

import { BASE_URL, API_KEY } from '../config/api-config'

export const getPopularMovies = async () => {
	const url = BASE_URL + 'movie/popular'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		})

		const movies = response.data.results
		return movies
	} catch (error) {
		throw error
	}
}
