<template>
	<div id="main">
		<section class="container is-fullhd">
			<div class="block">
				<div class="tabs is-centered">
					<ul>
						<router-link to="/app/search" tag="li" activeClass="is-active"><a>Search</a></router-link>
						<router-link to="/app/veto" tag="li" activeClass="is-active"><a>Veto</a></router-link>
					</ul>
				</div>
				<router-view></router-view>
			</div>
			<section class="footer has-background-dark has-text-centered">
				<a href="https://www.themoviedb.org/">
					<img src="@/assets/poweredbytmdb.png" width="200px">
				</a>
			</section>
		</section>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	components: {}
}
</script>