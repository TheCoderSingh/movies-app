import axios from 'axios'

import { BASE_URL, API_KEY } from '../config/api-config'

// Movies
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

export const getNowPlayingMovies = async () => {
	const url = BASE_URL + 'movie/now_playing'

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

export const getTopRatedMovies = async () => {
	const url = BASE_URL + 'movie/top_rated'

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

export const getUpcomingMovies = async () => {
	const url = BASE_URL + 'movie/upcoming'

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

// TV Shows
export const getOnTheAirTvShows = async () => {
	const url = BASE_URL + 'tv/on_the_air'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		})

		const shows = response.data.results
		return shows
	} catch (error) {
		throw error
	}
}

export const getAiringTodayTvShows = async () => {
	const url = BASE_URL + 'tv/airing_today'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		})

		const shows = response.data.results
		return shows
	} catch (error) {
		throw error
	}
}

export const getTopRatedTvShows = async () => {
	const url = BASE_URL + 'tv/top_rated'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		})

		const shows = response.data.results
		return shows
	} catch (error) {
		throw error
	}
}

export const getPopularTvShows = async () => {
	const url = BASE_URL + 'tv/popular'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US'
			}
		})

		const shows = response.data.results
		return shows
	} catch (error) {
		throw error
	}
}

// Searching
export const getMultiSearchResults = async searchQuery => {
	const url = BASE_URL + 'search/multi'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US',
				query: searchQuery
			}
		})

		const results = response.data.results
		return results
	} catch (error) {
		throw error
	}
}

export const getMovieSearchResults = async searchQuery => {
	const url = BASE_URL + 'search/movie'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US',
				query: searchQuery
			}
		})

		const results = response.data.results
		return results
	} catch (error) {
		throw error
	}
}

export const getTvSearchResults = async searchQuery => {
	const url = BASE_URL + 'search/tv'

	try {
		const response = await axios.get(url, {
			params: {
				api_key: API_KEY,
				language: 'en-US',
				query: searchQuery
			}
		})

		const results = response.data.results
		return results
	} catch (error) {
		throw error
	}
}
