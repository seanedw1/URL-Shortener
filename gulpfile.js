const gulp = require('gulp');

gulp.task('major', () => {
  console.log('lo4');
});

gulp.task('minor', () => {
  console.log('lo4l');
});

gulp.task('patch', () => {
  console.log('lo4');
});

gulp.task('default', ['major', 'minor', 'patch']);
