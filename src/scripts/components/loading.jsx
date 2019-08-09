import React from 'react';

import '../../static/loading.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <h2>Loading...</h2>
      <img src="./potato.jpg" alt="I am a loading potato" className="loading" />
    </div>
  )
}

export default Loading;
