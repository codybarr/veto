import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// UI
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy, {
	defaultIconPack: 'fa'
})

// Filters
import '@/filters/poster.filter'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
