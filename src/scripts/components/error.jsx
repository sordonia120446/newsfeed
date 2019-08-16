import React from 'react';

const Error = props => {
  return (
    <div>
      <h2>We're sorry.  The service you are trying to reach is unavailable.</h2>
      <br />
      <h5>Details</h5>
      <p>{props.message}</p>
    </div>
  )
}

export default Error;
