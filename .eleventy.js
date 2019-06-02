const shortcodes = require('./src/shortcodes')

module.exports = config => {
  config.addFilter('squash', require('./src/filters/squash.js'))
  config.addFilter('dateDisplay', require('./src/filters/dateDisplay.js'))
  config.addLayoutAlias('application', 'application.njk')
  config.addLayoutAlias('zine', 'zine.njk')

  Object.entries(shortcodes).map(([shortcodeName, shortcodeFunction]) => {
    config.addShortcode(shortcodeName, shortcodeFunction)
  })

  config.addTransform('minifyHtml', require('./src/utils/minifyHtml.js'))

  return {
    dir: {
      input: './src/content',

      data: `../data`,
      includes: '../includes',
      layouts: '../layouts',

      output: './public',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
  }
}
