import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor (props) {
    // call to parent constructor
    super(props);
    this.state = { lat: null };
  }

  // render is required by React
  render () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return (
      <div>
        <div>Latitude: </div>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
 