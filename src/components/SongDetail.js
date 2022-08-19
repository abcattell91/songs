import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please select a song!</div>
  }
  return (
    <div>
      <h3>Details for</h3>
        <p>
          Song Title: {song.title}
          <br />
          Duration: {song.duration}s
        </p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
