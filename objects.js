
var playlist = {[artistName]: songTitle};

function updatePlaylist(playlist,artistName,songTitle) {
  var artistName;
  var songTitle;
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist;
}
