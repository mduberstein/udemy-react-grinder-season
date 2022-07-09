import React from 'react';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    // nothern hemisphere : sothern hemispher
    return lat > 0 ? 'summer': 'winter';
  } else {
    // nothern hemisphere : sothern hemispher
    return lat > 0 ? 'winter': 'winter';
  }
  
}

const SeasonDisplay = (props) => {
  console.log(`Props.lat = ${props.lat}`);
  const season = getSeason (props.lat, new Date().getMonth());
  console.log(season);
  return (
    <div>Season Display</div>
  );
};

export default SeasonDisplay;