const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip',()=>{
	return gulp.src('toucan/**/*',{base: "."})

	.pipe(zip('toucan_theme.zip'))
	.pipe(gulp.dest('docs/downloads/'))
});

gulp.task('zip_docs',()=>{
	return gulp.src(['gulp_tasks/**/*','src/**/*','app.js','gulpfile.js', 'package.json'],{base: "."})
	.pipe(zip('toucan_source.zip'))
	.pipe(gulp.dest('docs/downloads/'))
});
