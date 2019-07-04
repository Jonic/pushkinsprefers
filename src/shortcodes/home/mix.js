/* eslint-disable camelcase */
module.exports = ({ intro, soundcloudUrl, title, url }) => {
  return `
    <article class="mix">
      <h3><a href="${url}">${title}</a></h3>

      <p>${intro}</p>

      <iframe
        allow="autoplay"
        frameborder="no"
        height="166"
        scrolling="no"
        src="${soundcloudUrl}"
        width="100%"
      ></iframe>
    </article>
  `
}
