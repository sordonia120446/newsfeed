import React from 'react';

import Headline from "../components/headline";
import Empty from "../components/empty";
import NewsContext from '../containers/newsContext';


const HeadlineList = () => {
  return (
    <NewsContext.Consumer>
      {({data}) => {
        return (
          <div>
          {
            data.articles.length > 0
            ? data.articles.map((article, index) => {
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
      }}
    </NewsContext.Consumer>
  )
}

export default HeadlineList;
