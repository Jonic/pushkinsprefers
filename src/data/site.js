require('dotenv').config({
  path: `.env.${process.env.ELEVENTY_ENV}`,
})

const baseUrl = process.env.BASE_URL

module.exports = {
  baseUrl,
  buildTime: new Date(),
  coverImage: `${baseUrl}/images/cover.png`,
  description: 'A new publishing empire',
  favicon: `${baseUrl}/images/favicon.png`,
  title: 'Pushkins Prefers',
  twitter: '@pushkinsprefers',
}
