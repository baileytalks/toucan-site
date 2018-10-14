// theme_assets
// Move the necessary images to the theme folder ('toucan/assets')

const gulp = require('gulp');

gulp.task('theme_assets', function(done){
	return gulp.src(['src/theme/assets/**/*']).pipe(gulp.dest('toucan/')); // Transfer every asset
});
