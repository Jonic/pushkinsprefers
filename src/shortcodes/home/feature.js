module.exports = ({ imageAlt, imageSrc, intro, isBig, title, url }) => `
  <article class="feature ${isBig && 'big'}">
    <h3>
      <a href="${url}">
        ${title}
      </a>
    </h3>

    <p>${intro}</p>

    <a href="${url}">
      <img
        alt="${imageAlt}"
        src="${imageSrc}"
      />
    </a>
  </article>
`
