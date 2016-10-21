const gulp = require('gulp');
const git = require('gulp-git');
const gitignore = require('gulp-gitignore');
// const remer = require('./util/src/util').versionBump;
const version = require('./package.json').version;
const argv = require('yargs').argv;


gulp.task('bump', () => {
  if (argv.major) {
    remer(version, 'major');
  } else if (argv.minor) {
    remer(version, 'minor');
  } else {
    remer(version, 'patch');
  }
});

gulp.task('add', () => {
  return gulp.src('./*')
  .pipe(gitignore())
    .pipe(git.add());
});

gulp.task('commit', () => {
  return gulp.src('./*')
  .pipe(gitignore())
    .pipe(git.commit('initial commit'));
});

gulp.task('push', () => {
  git.push('origin', 'gulp', (err) => {
    if (err) throw err;
  });
});

gulp.task('default', ['add', 'commit', 'push']);
