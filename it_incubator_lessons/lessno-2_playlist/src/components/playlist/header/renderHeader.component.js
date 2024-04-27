export function renderPlaylistHeader(playlistForRendering) {
  renderPlaylistTitle(playlistForRendering);
  renderPlaylistCover(playlistForRendering);
}

function renderPlaylistCover(playlistForRendering) {
  const coverElement = document.createElement("img");
  coverElement.src = playlistForRendering.coverImageUrl;
  document.body.append(coverElement);
}

function renderPlaylistTitle(playlistForRendering) {
  const playlistTitleElement = document.createElement("h2");
  playlistTitleElement.append(playlistForRendering.title);
  document.body.append(playlistTitleElement);
}
