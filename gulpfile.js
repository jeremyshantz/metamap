var config = {

	source:'./metamap/main/templates/main/*.*',
	htmltemplates: {},
	templateCache: {
		file: 'templates.js',
		options: {
			module: 'app',
			standAline: false,
			root: 'app/'
		}
	}
};

var gulp = require('gulp')

var gulpprint = require('gulp-print')
var util = require('gulp-util')

gulp.task('hello-world', function() {
	console.log('hello, world')
});

gulp.task('test', function() {

	return gulp.src(config.source)
	.pipe(gulpprint());
});

gulp.task('templatecache', function() {
 return gulp
 	.src(config.htmltemplates) //todo
 	.pipe($.minifyHtml({ empty: true}))
 	.pipe($.angularTemplatecache (config.templateCache.file,
 			config.templateCache.options))
});
