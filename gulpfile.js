var gulp = require('gulp');
var postcss = require('gulp-postcss');

var processorArray = [
	// require('postcss-focus')(),
	// require('autoprefixer')({
	// 	browsers: [
	// 		'last 2 versions',
	// 		'ie 6-8',
	// 		'Firefox > 20'
	// 	]
	// }),
	// require('cssnext')(),
	require('precss')()
];

gulp.task('styles', function () {
	return gulp.src('app/css/style.css')
		.pipe(postcss(processorArray))
		.pipe(gulp.dest('dist/css'))
});