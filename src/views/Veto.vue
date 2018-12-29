<template>
	<section class="section">
		<div class="container is-fullhd">
			<!-- <b-loading :active.sync="loading" :is-full-page="false"></b-loading> -->
			<transition-group name="list" class="columns is-multiline block" tag="div">
				<div v-for="movie of movies" :key="movie.id" class="column is-one-quarter has-text-centered">
					<Tile :movie="movie" :selected="true" :veto="true"/>
				</div>
			</transition-group>
		</div>
	</section>
</template>

<script>
import store from '@/store'
import Tile from '@/components/Tile.vue'

export default {
	name: 'veto',
	components: {
		Tile
	},
	computed: {
		movies() {
			return store.getters.SELECTED_MOVIES
		},
		announceWinner() {
			return store.getters.ANNOUNCE_WINNER
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