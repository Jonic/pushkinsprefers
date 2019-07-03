/* eslint-disable camelcase */
module.exports = ({ intro, soundcloudUrl, title, url }) => {
  return `
    <article class="mix">
      <h3>
        <a href="${url}">
          ${title}
        </a>
      </h3>

      <p>${intro}</p>

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="${soundcloudUrl}"
      ></iframe>
    </article>
  `
}
