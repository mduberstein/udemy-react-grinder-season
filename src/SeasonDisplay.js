import React from "react";

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
  const text = season === "winter" ? "Burr, it is chilly" : "Let's hit the beach";
  return (
    <div>
      <h1>{text}</h1>
      {/* // Alternative 2, showing use of ternary expression inside curly braces of JSX: 
      // {season === "winter" ? "Burr, it is chilly" : "Let's hit the beach"} */}
    </div>
  );
};

export default SeasonDisplay;
