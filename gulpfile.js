// Generated on 2016-08-16 using generator-angular 0.15.1
'use strict';

var gulp = require('gulp');
/*var postcss = require('gulp-postcss');*/
var px2rem = require('gulp-px3rem');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
var proxyMiddleware = require('http-proxy-middleware');
var proxy = proxyMiddleware(['/user', '/passport'], {
	target: 'http://www.indmen.com',
	changeOrigin: true
});

var yeoman = {
	app: require('./bower.json').appPath || 'app',
	dist: 'dist'
};

var paths = {
	scripts: [yeoman.app + '/scripts/**/*.js', yeoman.app + '/bower_components/**/*.js'],
	sass: [yeoman.app + '/sass/**/*.scss'],
	styles: [yeoman.app + '/styles/**/*.css', yeoman.app + '/bower_components/**/*.css'],
	test: ['test/spec/**/*.js'],
	testRequire: [
		yeoman.app + '/bower_components/angular/angular.js',
		yeoman.app + '/bower_components/angular-mocks/angular-mocks.js',
		yeoman.app + '/bower_components/angular-resource/angular-resource.js',
		yeoman.app + '/bower_components/angular-cookies/angular-cookies.js',
		yeoman.app + '/bower_components/angular-sanitize/angular-sanitize.js',
		yeoman.app + '/bower_components/angular-route/angular-route.js',
		'test/mock/**/*.js',
		'test/spec/**/*.js'
	],
	karma: 'karma.conf.js',
	views: {
		main: yeoman.app + '/index.html',
		files: [yeoman.app + '/views/**/*.html']
	}
};

////////////////////////
// Reusable pipelines //
////////////////////////

var lintScripts = lazypipe()
	.pipe($.jshint, '.jshintrc')
	.pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
	.pipe($.autoprefixer, 'last 1 version')
	.pipe(gulp.dest, '.tmp/styles');

///////////
// Tasks //
///////////

gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(styles());
});

gulp.task('lint:scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(lintScripts());
});

gulp.task('clean:tmp', function(cb) {
	rimraf('./.tmp', cb);
});

gulp.task('start:client', ['start:server', 'styles'], function() {
	openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
	$.connect.server({
		root: [yeoman.app, '.tmp'],
		livereload: true,
		// Change this to '0.0.0.0' to access the server from outside.
		port: 9000
	});
});

gulp.task('start:server:test', function() {
	$.connect.server({
		root: ['test', yeoman.app, '.tmp'],
		livereload: true,
		port: 9001
	});
});

gulp.task('watch', function() {
	$.watch(paths.styles)
		.pipe($.plumber())
		.pipe(styles())
		.pipe($.connect.reload());

	$.watch(paths.views.files)
		.pipe($.plumber())
		.pipe($.connect.reload());

	$.watch(paths.scripts)
		.pipe($.plumber())
		.pipe(lintScripts())
		.pipe($.connect.reload());

	$.watch(paths.test)
		.pipe($.plumber())
		.pipe(lintScripts());

	gulp.watch('bower.json', ['bower']);
});

gulp.task("server-syn", function() {
	var files = [
		'**/*.html',
		'**/*.css',
		'**/*.js'
	];
	browserSync.init(files, {
		server: "./",
		middleware: [proxy]
	});
})
gulp.task("dist-syn", function() {
	var files = [
		'**/*.html',
		'**/*.css',
		'**/*.js'
	];
	browserSync.init(files, {
		server: "./dist"
	});
	gulp.watch(paths.sass, ['sass']);
})
gulp.task('serve', function(cb) {

	runSequence('clean:tmp', ['lint:scripts'], ['start:client'],
		'watch', cb);
});

gulp.task('serve:prod', function() {
	$.connect.server({
		root: [yeoman.dist],
		livereload: true,
		port: 9000
	});
});

gulp.task('test', ['start:server:test'], function() {
	var testToFiles = paths.testRequire.concat(paths.scripts, paths.test);
	return gulp.src(testToFiles)
		.pipe($.karma({
			configFile: paths.karma,
			action: 'watch'
		}));
});

// inject bower components
gulp.task('bower', function() {
	return gulp.src(paths.views.main)
		.pipe(wiredep({
			directory: yeoman.app + '/bower_components',
			ignorePath: '..'
		}))
		.pipe(gulp.dest(yeoman.app + '/views'));
});

///////////
// Build //
///////////

gulp.task('clean:dist', function(cb) {
	rimraf('./dist', cb);
});

gulp.task('client:build', ['html', 'styles'], function() {
	var jsFilter = $.filter('**/*.js');
	var cssFilter = $.filter('**/*.css');
	return gulp.src(paths.views.main)
		.pipe($.useref({
			searchPath: [yeoman.app, '.tmp']
		}))
		.pipe(jsFilter)
		.pipe($.ngAnnotate())
		.pipe($.uglify())
		.pipe(jsFilter.restore())
		.pipe(cssFilter)
		.pipe(px2rem()) //rem
		.pipe($.minifyCss({
			cache: true
		}))
		.pipe(cssFilter.restore())
		/*	.pipe($.rev())*/ // 加md5 后缀
		.pipe(gulp.dest(yeoman.dist));
});

gulp.task('html', function() {
	return gulp.src(yeoman.app + '/views/**/*')
		.pipe(gulp.dest(yeoman.dist + '/views'));
});

gulp.task('images', function() {
	return gulp.src(yeoman.app + '/images/**/*')
		.pipe($.cache($.imagemin({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest(yeoman.dist + '/images'));
});

gulp.task('copy:extras', function() {
	return gulp.src(yeoman.app + '/*/.*', {
			dot: true
		})
		.pipe(gulp.dest(yeoman.dist));
});

gulp.task('copy:fonts', function() {
	return gulp.src(yeoman.app + '/fonts/**/*')
		.pipe(gulp.dest(yeoman.dist + '/fonts'));
});

gulp.task('sass', function() {
	return gulp.src(paths.sass)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(yeoman.app + '/styles'));
});

gulp.task('sass:watch', function() {
	gulp.watch(paths.sass, ['sass']);
});

gulp.task('build', ['clean:dist'], function() {
	runSequence(['images', 'copy:extras', 'copy:fonts', 'client:build']);
});
gulp.task('px2rem', function() {
	gulp.src('./*.css')
		.pipe(px2rem())
		.pipe(gulp.dest('./dest'))
});
gulp.task('default', ['build']);