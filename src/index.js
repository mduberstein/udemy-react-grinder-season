import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor (props) {
    //a must call to parent constructor
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState, defined in React.Component
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  // render is required by React
  render () {
    return (
      <div>
        <div>
          Latitude: {this.state.lat}
          <br />
          Error: {this.state.errorMessage}
        </div>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
 