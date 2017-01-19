var App = Vue.extend({});

/* SETTING UP ROUTER */

// create a component postList
var postList = Vue.extend({

	template:"#post-list-template",
	//this is where you grab the data from the from WP Rest API's json file
	data: function(){
		return {
			posts: '',
		}
	},

	// tell vue.js what this component is going to do
	ready: function(){
		// this is when vue-resource comes in to help us find those posts
		posts.$resource('/wp-json/wp/v2/posts');
		
		// we need to get those posts
		posts.get(function(posts){
			this.$set('posts', posts);
		})
	}
});

var router = new VueRouter({
	routes: [
		{path: '/', component:postList}
	]
});


// Deprecated: router.start(App, '#app');
// https://vuejs.org/v2/guide/migration-vue-router.html#Router-Initialization


/* START ROUTER */
new Vue({
	el: '#app',
	router: router,
	template:'<router-view></router-view>'
})