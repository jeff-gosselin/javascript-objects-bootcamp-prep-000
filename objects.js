var playlist = {artist: "Name", title: "Song"};

function updatePlaylist(playlist,artistName,songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist;
}
