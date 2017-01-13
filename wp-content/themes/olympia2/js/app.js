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


// start router
// Deprecated: router.start(App, '#app');


// new
new Vue({
	el: '#app',
	router: router,
	template:'<router-view></router-view>'
})