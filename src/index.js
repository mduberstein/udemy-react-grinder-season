import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor (props) {
    //a must call to parent constructor
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState, defined in React.Component
        this.setState({lat: position.coords.latitude})

        // BAD, doesn't work except if done one time in the constructor
        // this.state.lat = positions.coords.latitude
      },
      (err) => console.log(err)
    );
  }

  // render is required by React
  render () {

    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
 