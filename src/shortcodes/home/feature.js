const he = require('he')
const e = he.encode

module.exports = ({ imageAlt, imageSrc, intro, isBig, title, url }) => {
  const classnames = ['feature']

  if (isBig) {
    classnames.push('big')
  }

  return `
    <article class="${classnames.join(' ')}">
      <h3><a href="${url}">${e(title)}</a></h3>

      <p>${e(intro)}</p>

      <a href="${url}">
        <img
          alt="${e(imageAlt)}"
          src="${imageSrc}"
        />
      </a>
    </article>
  `
}
