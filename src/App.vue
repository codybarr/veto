<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'app',
	computed: {
		user() {
			return this.$store.state.auth.user
		}
	},
	methods: {
		...mapActions('auth', ['authenticate', 'logout']),
		handleLogout() {
			this.logout().then(_ => {
				this.$router.push('/')
			})
		}
	}
}
</script>

<style lang="scss">
/* Transitions */

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease-out !important;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

/* Bulma Default Overrides */

// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors
// $primary: #8c67ef;
// $primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
	'white': (
		$white,
		$black
	),
	'black': (
		$black,
		$white
	),
	'light': (
		$light,
		$light-invert
	),
	'dark': (
		$dark,
		$dark-invert
	),
	'primary': (
		$primary,
		$primary-invert
	),
	'info': (
		$info,
		$info-invert
	),
	'success': (
		$success,
		$success-invert
	),
	'warning': (
		$warning,
		$warning-invert
	),
	'danger': (
		$danger,
		$danger-invert
	),
	'twitter': (
		$twitter,
		$twitter-invert
	)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
