const releaseDeets = ({ artist, image, label, meta, title, url, year }) => {
  if (!meta) {
    meta = [label, year].join(' - ')
  }

  return `
    <div class="release-deets">
      <div class="img">
        <a href="${url}">
          <img alt="Cover artwork of ${title} by ${artist}" src="${image}">
        </a>
      </div>

      <div class="info">
        <h3>
          <a href="${url}">
            ${artist}<br />
            <em>${title}</em>
          </a>
        </h3>

        <p class="meta">${meta}</p>
      </div>
    </div>
  `
}

const releaseEmbed = ({ bandcampUrl, spotifyUrl }) => {
  const embed = `
    <iframe
      seamless
      src="${bandcampUrl}"
      style="border: 0; width: 100%; height: 42px;"
    ></iframe>
  `

  if (spotifyUrl) {
    embed = `
      <iframe
        allow="encrypted-media"
        allowtransparency="true"
        frameborder="0"
        height="80"
        src="${spotifyUrl}"
        width="300"
      ></iframe>
    `
  }

  return embed
}

module.exports = (content, options) => {
  const deets = releaseDeets(options)
  const embed = releaseEmbed(options)

  return `
    <section>
      ${deets}
      ${content}
      ${embed}
    </section>
  `
}
