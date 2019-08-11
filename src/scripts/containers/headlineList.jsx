import React from 'react';

import Headline from "../components/headline";
import Empty from "../components/empty";


const HeadlineList = props => {
  return (
    <div>
      {
        props.articles.length > 0
        ? props.articles.map((article, index) => {
          return (
            <div key={index}>
              <Headline {...article} />
            </div>
          )
        })
        : <Empty />
      }
    </div>
  )
}

export default HeadlineList;
