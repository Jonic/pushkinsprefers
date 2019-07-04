const he = require('he')
const e = he.encode

module.exports = ({ imageAlt, imageSrc, title, url }) => `
  <article class="feature image">
    <a href="${e(url)}">
      <h3>${title}</h3>
      <img alt="${e(imageAlt)}" src="${imageSrc}">
    </a>
  </article>
`
