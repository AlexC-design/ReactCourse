import React from "react";
import "./VideoItem.css";
import PropTypes from "prop-types";

const VideoItem = ({ video, onVideoSelect }) => {
  try {
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="ui image"
          alt={video.snippet.title}
          src={`${video.snippet.thumbnails.default.url}`}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Unexpected input</div>;
  }
};

VideoItem.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string,
      thumbnails: PropTypes.shape({
        default: PropTypes.shape({
          url: PropTypes.string
        })
      })
    })
  }),
  onVideoSelect: PropTypes.func
};

export default VideoItem;
