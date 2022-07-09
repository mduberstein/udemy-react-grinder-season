import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'   
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // nothern hemisphere : sothern hemispher
    return lat > 0 ? "summer" : "winter";
  } else {
    // nothern hemisphere : sothern hemispher
    return lat > 0 ? "winter" : "winter";
  }
};

const SeasonDisplay = (props) => {
  console.log(`Props.lat = ${props.lat}`);
  const season = getSeason(props.lat, new Date().getMonth());
  // ES2015 destructuring syntax
  const {text, iconName} = seasonConfig[season];

  return (
    // best practice the name of the class applied to the root HTML element of a component
    // matches the component name with hyphenation instead of CamelCase
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1> 
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
