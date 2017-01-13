# Themeing with WP REST API, Vue.js, and WordPress

- clone repo  
- set up  

## Requirements:

[Node.js](https://nodejs.org/)
[Gulp.js](http://gulpjs.com/)

## Installation

Clone `olympia` folder into your themes directory. 

Move `package.json`and `gulpfile.js` to WordPress root. 

Install all gulp plugins with npm install

```shell
npm install
```

If you don't want to have `package.json` and `gulpfile.js` in root directory you can leave them in the theme, and run `npm install` in theme directory. But in that case be sure to change the paths in `gulpfile.js`. You will mostly have to delete `/wp-content/themes/olympia/` from the paths.

Run `glup watch`

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
3.


