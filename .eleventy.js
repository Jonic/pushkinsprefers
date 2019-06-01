module.exports = config => {
  const env = process.env.ELEVENTY_ENV

  config.addLayoutAlias('application', 'layouts/application.njk')
  config.addFilter('squash', require('./src/filters/squash.js'))
  config.addFilter('dateDisplay', require('./src/filters/dateDisplay.js'))
  config.addTransform('minifyHtml', require('./src/utils/minifyHtml.js'))

  return {
    dir: {
      data: `data/${env}`,
      input: 'src/site',
      output: 'public',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
  }
}
