import React from 'react';

import '../../static/headline.css';

const Headline = props => {
  return (
    <div className="headline-wrapper drop-shadow">
      <hr />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.urlToImage} alt={props.description} className="image" />
      </a>
    </div>
  )
}

export default Headline;
