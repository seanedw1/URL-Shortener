const gulp = require('gulp');
const git = require('gulp-git');
const jeditor = require('gulp-json-editor');
const gitignore = require('gulp-gitignore');
const remer = require('remer').versionBump;
const version = require('./package.json').version;
const argv = require('yargs').argv;


gulp.task('bump', () => {
  // if major
  if (argv.major) {
    gulp.src('./package.json')
      .pipe(jeditor({
        version: remer(version, 'major'),
      }))
      .pipe(gulp.dest('./'));
  // if minor
  } else if (argv.minor) {
    gulp.src('./package.json')
      .pipe(jeditor({
        version: remer(version, 'minor'),
      }))
      .pipe(gulp.dest('./'));
  // if patch
  } else {
    gulp.src('./package.json')
      .pipe(jeditor({
        version: remer(version, 'patch'),
      }))
      .pipe(gulp.dest('./'));
  }
// closes bump task
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
  git.push('origin', 'master', (err) => {
    if (err) throw err;
  });
});

gulp.task('default', ['add', 'commit', 'push']);
