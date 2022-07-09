import React from 'react'

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      {/* simplistic way to define default in case no props are passed by parent */}
      {/* <div class="ui big text loader">{props.message || "Loading ..."}</div> */}
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;