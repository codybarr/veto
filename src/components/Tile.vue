<template>
	<transition name="fade" mode="out-in">
		<section class="ns-tile block">
			<!-- <div :style="imgStyle" :class="['shrink', 'poster-tile', 'block', { 'selected': isSelected }]" @click="addOrRemove">
			</div>-->
			<b-tooltip :label="movie.title" type="is-dark" position="is-top">
				<img
					:src="movie.poster_path | poster"
					:class="['shrink', 'poster-tile', 'block', { 'selected': isSelected }]"
					@click="addOrRemove"
				>
			</b-tooltip>
		</section>
	</transition>
</template>

<script>
import store from '@/store'
const POSTER_BASE_URL = process.env.VUE_APP_POSTER_PATH

export default {
	name: 'ns-tile',
	props: ['movie', 'selected', 'veto'],
	methods: {
		addOrRemove() {
			let { id, title, poster_path } = this.movie
			store.dispatch('TOGGLE_MOVIE', { id, title, poster_path })
		}
	},
	computed: {
		isSelected() {
			return this.selected && !this.veto
		},
		imgStyle() {
			return {
				backgroundImage:
					'url(' + POSTER_BASE_URL + this.movie.poster_path + ')'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.poster-tile {
	background-color: rgba(0, 0, 0, 0.45);
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);

	&:hover {
		cursor: pointer;
	}
}

.shrink {
	transition: all 0.3s ease;

	&:hover {
		transform: scale(0.9);
		filter: brightness(70%);
	}
}

.selected,
.shrink:hover.selected {
	transform: scale(0.7);
	filter: brightness(30%);
}
</style>
