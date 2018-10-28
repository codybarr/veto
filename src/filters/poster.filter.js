import Vue from 'vue'
const POSTER_PATH = process.env.VUE_APP_POSTER_PATH

Vue.filter('poster', poster => {
	return POSTER_PATH + poster
})
