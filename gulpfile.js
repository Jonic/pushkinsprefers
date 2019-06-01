'use strict'

const gulp = require('gulp')
const pkg = require('./package.json')
const Fiber = require('fibers')

const autoprefixer = require('autoprefixer')
const browserslist = require('browserslist')
const cssnano = require('gulp-cssnano')
const header = require('gulp-header')
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const stripComments = require('gulp-strip-css-comments')

const cssDest = './src/site/_includes/assets/styles'
const sassSource = './gulp-src/styles/**/*'
const applicationStyles = './gulp-src/styles/application.scss'

// Set banner template
const banner = [
  '/*',
  `  ${pkg.name}`,
  '',
  `  ${pkg.description}`,
  '',
  `  Author:      ${pkg.author.name}`,
  `  Author URI:  ${pkg.author.url}`,
  `  Version:     ${pkg.version}`,
  '*/',
  '',
  '',
].join('\n')

sass.compiler = require('sass')

const compileScss = () => {
  return gulp
    .src(applicationStyles)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        fiber: Fiber,
      }).on('error', sass.logError),
    )
    .pipe(
      header(banner, {
        pkg: pkg,
      }),
    )
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest(cssDest))
    .pipe(stripComments())
    .pipe(cssnano())
    .pipe(
      postcss([
        autoprefixer({
          browsers: browserslist(),
          flexbox: true,
          grid: true,
        }),
      ]),
    )
    .pipe(
      header(banner, {
        pkg: pkg,
      }),
    )
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDest))
    .pipe(notify('Sass compiled! ヽ(゜∇゜)ノ'))
}

const watch = () => gulp.watch(sassSource, compileScss)

gulp.task('build', compileScss)
gulp.task('start', gulp.series(watch))
