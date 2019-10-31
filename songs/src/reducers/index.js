import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Orion", duration: "7:42" },
    { title: "One", duration: "5:26" },
    { title: "Master", duration: "8:03" },
    { title: "Harvester", duration: "4:32" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
