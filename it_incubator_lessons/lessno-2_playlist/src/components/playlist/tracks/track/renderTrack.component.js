export function renderPlaylistTrack(inputTrackForRendering) {
  const trackElement = document.createElement("div");

  const trackTitleElement = document.createElement("div");
  if (inputTrackForRendering.inTrend) {
    trackTitleElement.append("🔥");
  }

  trackTitleElement.append(
    `${inputTrackForRendering.artistName} - ${inputTrackForRendering.title}`
  );
  trackElement.append(trackTitleElement);

  const coverElement = document.createElement("img");
  coverElement.src = inputTrackForRendering.coverImageUrl;
  trackElement.append(coverElement);

  const audioElement = document.createElement("audio");
  audioElement.src = inputTrackForRendering.fileUrl;
  audioElement.controls = true;
  trackElement.append(audioElement);

  document.body.append(trackElement);
}
