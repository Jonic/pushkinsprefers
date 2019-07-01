const filters = require('./src/filters')
const layouts = ['application', 'zine']
const shortcodes = require('./src/shortcodes')
const transforms = require('./src/transforms')

module.exports = config => {
  Object.entries(filters).map(([filterName, filterFunction]) => {
    config.addFilter(filterName, filterFunction)
  })

  for (let layout of layouts) {
    config.addLayoutAlias(layout, `${layout}.njk`)
  }

  Object.entries(shortcodes).map(([shortcodeName, shortcodeFunction]) => {
    config.addShortcode(shortcodeName, shortcodeFunction)
  })

  Object.entries(transforms).map(([transformName, transformFunction]) => {
    config.addShortcode(transformName, transformFunction)
  })

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
