 import React from 'react';
 import ReactDOM from 'react-dom';
 import SeasonDisplay from './SeasonDisplay';

 const App = () => {
  return (
    <div>
      <div>Seasons</div>
      <SeasonDisplay />
    </div>

  );
 };

 ReactDOM.render(<App />, document.querySelector('#root'));