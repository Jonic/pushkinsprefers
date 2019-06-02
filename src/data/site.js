require('dotenv').config({
  path: `.env.${process.env.ELEVENTY_ENV}`,
})

const baseUrl = process.env.BASE_URL

module.exports = {
  baseUrl,
  buildTime: new Date(),
  coverImage: `${baseUrl}/assets/images/covers/index.png`,
  favicon: `${baseUrl}/assets/images/icons/favicon.png`,
  description: 'A new publishing empire.',
  title: 'Pushkins Prefers',
}
