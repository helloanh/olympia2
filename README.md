# Themeing with WP REST API, Vue.js, and WordPress
Jump Straight into /themes/olympia2/js directory for the core development, most of the root files are standard WP core.  



Based on Ivan's Doric work.  Check him out <a href="http://watch-learn.com">here</a>

## Requirements:

[Node.js](https://nodejs.org/)
[Gulp.js](http://gulpjs.com/)

Make sure Gulp installed in the right directory for mac,  you might have to debug:

```bash
npm config set prefix /usr/local 
sudo npm install gulp -g

``` 
Source <a href="http://stackoverflow.com/questions/25090452/gulp-command-not-found-after-install">here</a>

## Installation

Clone `olympia` folder into your themes directory. 

Move `package.json`and `gulpfile.js` to WordPress root. 

Install all gulp plugins with npm install

```shell
npm install
```

If you don't want to have `package.json` and `gulpfile.js` in root directory you can leave them in the theme, and run `npm install` in theme directory. But in that case be sure to change the paths in `gulpfile.js`. You will mostly have to delete `/wp-content/themes/olympia/` from the paths.

Run `gulp watch`

## Features

You only have `clearfix` defined and `_reset.scss` from Eric Mayer as a partial and some empty scss partials.

### Gulp features

* Image optimization
* Sass compilation
* Auto prefixing
* Source maps for css file
* Uglifying and concatinating all js files
* LiveReload

All of these features are run when starting `gulp watch` except for image optimization.  


## Setting Up - WP Dashboard

1. Get WP REST API v2 plugin and activate  
2. If your site has no content, use FakerNews and generate some categories.  
3. You can go to the path http://localhost/YOURWORDPRESSSITE/wp-json/wp/v2/posts to view all posts.  

Now the next step is to hook up all those posts from the REST API, to make it look like a grid view for users. (V from MVC).  

### Listing Posts  






