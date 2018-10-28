import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

Vue.config.devtools = true

const axios = Axios.create({
	baseURL: 'https://api.themoviedb.org/4',
	params: {
		api_key: process.env.VUE_APP_TMDB_API_KEY,
		certification_country: 'US',
		sort_by: 'popularity.desc'
		// sort_by: 'release_date.asc'
	}
	// headers: { 'X-Custom-Header': 'foobar' }
})

export default new Vuex.Store({
	state: {
		searchResults: [],
		selectedMovies: JSON.parse(localStorage.getItem('movies')) || []
	},
	getters: {
		SEARCH_RESULTS: state => {
			return state.searchResults
		},
		SELECTED_MOVIES: state => {
			return state.selectedMovies
		}
	},
	mutations: {
		SET_SEARCH_RESULTS: (state, payload) => {
			state.searchResults = payload
		},
		ADD_SELECTED_MOVIE: (state, movie) => {
			state.selectedMovies.push(movie)
			localStorage.setItem('movies', JSON.stringify(state.selectedMovies))
		},
		REMOVE_SELECTED_MOVIE: (state, movie) => {
			state.selectedMovies = state.selectedMovies.filter(
				selectedMovie => selectedMovie.id !== movie.id
			)
			localStorage.setItem('movies', JSON.stringify(state.selectedMovies))
		}
	},
	actions: {
		FETCH_KID_MOVIES: async (context, payload) => {
			let { data } = await axios.get('/discover/movie', {
				params: {
					certification: 'G'
					// 'certification.lte': 'PG'
				}
			})
			context.commit('SET_SEARCH_RESULTS', data.results)
		},
		SEARCH_KID_MOVIES: async (context, payload) => {
			let { data } = await axios.get('/search/movie', {
				params: {
					certification: 'G',
					// 'certification.lte': 'PG',
					query: payload
				}
			})
			context.commit('SET_SEARCH_RESULTS', data.results)
		},
		TOGGLE_MOVIE: ({ commit, state }, movie) => {
			let found = state.selectedMovies
				.map(selectedMovie => selectedMovie.id)
				.indexOf(movie.id)

			if (found > -1) {
				commit('REMOVE_SELECTED_MOVIE', movie)
			} else {
				commit('ADD_SELECTED_MOVIE', movie)
			}
		}
	}
})
