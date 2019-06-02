module.exports = ({ artist, image, label, title, url, year }) => `
  <div class="release-deets">
    <div class="img">
      <a href="${url}">
        <img src="${image}" alt="Cover artwork of ${title} by ${artist}">
      </a>
    </div>
    <div class="info">
      <h3>
        <a href="${url}">
          ${artist}<br />
          <em>${title}</em>
        </a>
      </h3>
      <p class="meta">${label} ${year}</p>
    </div>
  </div>
`
