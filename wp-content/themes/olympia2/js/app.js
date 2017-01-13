var App = Vue.extend({});

/* SETTING UP ROUTER */

// create a component postList
var postList = Vue.extend({
	template:"#post-list-template"
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