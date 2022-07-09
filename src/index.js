import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor (props) {
  //   //a must call to parent constructor
  //   super(props);
  //   // THIS IS THE ONLY TIME we do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount (){
    console.log('In componentDidMount: My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}) ,
      err => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate() {
    console.log ('In componentDidUpdate: My component updated, it re-rendered');
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
 