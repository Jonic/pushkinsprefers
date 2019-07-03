module.exports = ({ imageAlt, imageSrc, title, url }) => `
  <article class="feature image">
    <a href="${url}">
      <h3>${title}</h3>
      <img alt="${imageAlt}" src="${imageSrc}">
    </a>
  </article>
`
