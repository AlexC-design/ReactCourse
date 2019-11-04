import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  if (!selectedSong) {
    return <div>Select song</div>;
  }

  return (
    <div>
      <h4>Details for:</h4>
      <p>Title: {selectedSong.title}</p> 
    
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
