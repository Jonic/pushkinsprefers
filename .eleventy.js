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
      data: `../data`,
      includes: '../includes',
      input: './src/content',
      layouts: '../layouts',
      output: './public',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: [
      'css',
      'gif',
      'jpg',
      'js',
      'md',
      'njk',
      'otf',
      'png',
      'ttf',
      'woff',
      'woff2',
    ],
  }
}
