<template>
	<div id="main">
		<div class="hero is-dark is-fullheight has-fixed-navbar">
			<section class="hero-body">
				<div class="container is-fluid is-marginless has-text-centered">
					<h1 class="title">Veto!</h1>
					<div class="tabs is-centered is-toggle">
						<ul>
							<router-link to="/app/search" tag="li" activeClass="is-active">
								<a>
									<b-icon icon="search"></b-icon>
									<span>Search</span>
								</a>
							</router-link>
							<router-link to="/app/veto" tag="li" activeClass="is-active">
								<a>
									<b-icon icon="ban"></b-icon>
									<span>Veto</span>
								</a>
							</router-link>
						</ul>
					</div>
					<router-view></router-view>
				</div>
			</section>
			<section class="hero-foot has-background-light has-text-dark has-text-centered">
				<footer class="footer content">
					<p>&copy; 2018 Cody Barr</p>
					<p>
						<a href="https://www.themoviedb.org/">
							<img src="@/assets/poweredbytmdb.png" width="200px">
						</a>
					</p>
				</footer>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
	components: {}
}
</script>