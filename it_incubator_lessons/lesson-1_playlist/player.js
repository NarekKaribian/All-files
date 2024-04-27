let playlist = {
  logoName: "Playlist",
  title: "Hip-Hop Hits",
  coverImageUrl: "img/eminem_img.jpg",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInMinuts: 15,
    totalTracksDurationInSeconds: 25,
  },
  TextAndOthers: "and others",
  tracks: [
    {
      coverImageUrl: "img/eminem.jpeg",
      artistName: "Eminem",
      title: "Rap Fod",
      fileUrl: "music/Eminem-Rap-God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "img/katy_parry.jpeg",
      artistName: "Katy Perry",
      title: "I Kissed A Girl",
      fileUrl: "music/Katy Perry - I Kissed A Girl.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "img/50cent.jpg",
      artistName: "50cent",
      title: "in da Club",
      fileUrl: "music/50Cent-Get.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "img/diana_krall.jpeg",
      artistName: "Diana Krall",
      title: "Temptation",
      fileUrl: "music/Diana Krall - Temptation.mp3",
      isHot: false,
    },
  ],
};

// Reder
renderPlaylist(playlist);

function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering);

  renderTrack(playlistForRendering.tracks[0]);
  renderTrack(playlistForRendering.tracks[1]);
  renderTrack(playlistForRendering.tracks[2]);
  renderTrack(playlistForRendering.tracks[3]);
}

function renderPlaylistHeader(playlistForRendering) {
  let playlistImageElement = document.createElement("img");
  playlistImageElement.src = playlistForRendering.coverImageUrl;
  playlistImageElement.classList.add("img_playlist");
  document.body.append(playlistImageElement);

  let playlistInfoContainer = document.createElement("div");
  playlistInfoContainer.classList.add("playlist_info_container");

  let playlistLogoNameElement = document.createElement("h1");
  playlistLogoNameElement.append(playlistForRendering.logoName);

  let playlistTitleElement = document.createElement("h2");
  playlistTitleElement.append(playlistForRendering.title);

  let countTracksAndtimes = document.createElement("p");
  countTracksAndtimes.classList.add("count_tracks_and_times");
  countTracksAndtimes.append(
    `${playlistForRendering.info.totalTracksCount} tracks, 
    ${playlistForRendering.info.totalTracksDurationInMinuts}m 
    ${playlistForRendering.info.totalTracksDurationInSeconds}s`
  );

  let artistNameTextElements = document.createElement("p");
  artistNameTextElements.classList.add("artist_name_text_elements");
  let textContentAndOthers = document.createElement("span");
  textContentAndOthers.textContent = playlistForRendering.TextAndOthers;
  artistNameTextElements.append(
    document.createTextNode(
      `${playlistForRendering.tracks[0].artistName}, 
     ${playlistForRendering.tracks[1].artistName},
     ${playlistForRendering.tracks[2].artistName} `
    ),
    textContentAndOthers
  );

  playlistInfoContainer.append(
    playlistLogoNameElement,
    playlistTitleElement,
    countTracksAndtimes,
    artistNameTextElements
  );
  document.body.append(playlistInfoContainer);
}

function renderTrack(inputTrackForRendering) {
  let trackElement = document.createElement("div");
  trackElement.classList.add("track_element_box");

  let playerElement = document.createElement("audio");
  playerElement.src = inputTrackForRendering.fileUrl;
  playerElement.controls = true;

  let coverElement = document.createElement("img");
  coverElement.classList.add("cover_img_icons");
  coverElement.src = inputTrackForRendering.coverImageUrl;

  let artistNameElement = document.createElement("p");
  artistNameElement.classList.add("artist_name_element");

  let titleElement = document.createElement("span");
  titleElement.textContent = inputTrackForRendering.title;

  artistNameElement.append(
    document.createTextNode(`${inputTrackForRendering.artistName} - `),
    titleElement
  );

  trackElement.append(playerElement, coverElement, artistNameElement);
  document.body.append(trackElement);
}
