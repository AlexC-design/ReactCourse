import './SeasonsDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
    text: "Sa lovim plaja",
    iconName: "sun"
  },
  winter: {
    text: "Bâr, e frig",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (lat > 0) return month > 2 && month < 9 ? "summer" : "winter";
  if (lat < 0) return month > 2 && month < 9 ? "winter" : "summer";
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} loading icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} loading icon`} />
    </div>
  );
};

export default SeasonDisplay;
