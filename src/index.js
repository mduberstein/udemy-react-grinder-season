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

  componentDidMount (){
    console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    console.log ('My component updated, it re-rendered');
  }

  // render is required by React
  render () {
      console.log('In render method');
      if(this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
      if(!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>;
      }
      return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
 