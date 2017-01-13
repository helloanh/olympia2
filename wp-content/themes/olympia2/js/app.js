var App = Vue.extend({});

// Set up our router


// create a component postList
var postList = Vue.extend({
	template:"<h1>Hello World Test</h1>";
});

var router = new VueRouter();

// no we need a root router  

router.map({
	'/':{
		// define our component
		component: postList
	}
});

// start router
router.start(App, '#app');