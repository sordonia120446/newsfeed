import React from 'react';

import '../../static/headline.css';

const Headline = props => {
  return (
    <div className="headline-wrapper drop-shadow">
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      <img src={props.urlToImage} alt="" className="image" />
      <p>{props.description}</p>
      <a href={props.url} target="_blank" rel="noopener noreferrer">Read more</a>
      <hr />
    </div>
  )
}

export default Headline;
