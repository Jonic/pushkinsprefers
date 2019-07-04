require('dotenv').config({
  path: `.env.${process.env.ELEVENTY_ENV}`,
})

const baseUrl = process.env.BASE_URL

module.exports = {
  baseUrl,
  buildTime: new Date(),
  description: 'A new publishing empire',
  favicon: `${baseUrl}/_images/catalog/favicon.png`,
  title: 'Pushkins Prefers',
  twitter: '@pushkinsprefers',
}
