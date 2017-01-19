<?php get_header(); ?>
	<div class="white-wrap">
		<div id="app">
			<router-view></router-view>
		</div>
	</div>

	<template id="post-list-template">
		<div v-for="post in posts">
			<h2>{{post.title.rendered}}</h2>
		</div>
	</template>
    
<?php get_footer(); ?>