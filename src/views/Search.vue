<template>
	<section class="section">
		<div class="field is-grouped">
			<input class="input is-large block" type="text" placeholder="Search for movies!" v-model="searchQuery" @keyup.enter="query">
		</div>

		<div class="container is-fullhd">
			<!-- <b-loading :active.sync="loading" :is-full-page="false"></b-loading> -->
			<div class="columns is-multiline block">
				<div v-for="result of results" :key="result.id" class="column is-one-quarter has-text-centered" v-if="result.poster_path">
					<Tile :movie="result" :selected="movieSelected(result)" :veto="false" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import store from '@/store'
import Tile from '@/components/Tile.vue'

export default {
	name: 'Search',
	components: {
		Tile
	},
	data() {
		return {
			searchQuery: ''
		}
	},
	created() {
		store.dispatch('FETCH_KID_MOVIES')
	},
	computed: {
		results() {
			return store.getters.SEARCH_RESULTS
		},
		allSelectedMovies() {
			return store.getters.SELECTED_MOVIES
		}
	},
	methods: {
		query() {
			store.dispatch('SEARCH_KID_MOVIES', this.searchQuery)
		},
		movieSelected(movie) {
			return (
				this.allSelectedMovies
					.map(selectedMovie => selectedMovie.id)
					.indexOf(movie.id) > -1
			)
		}
	}
}
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
	transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}
</style>
