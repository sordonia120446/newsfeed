import React from 'react';

import Headline from "../components/headline";
import Empty from "../components/empty";
import NewsContext from '../containers/newsContext';


const HeadlineList = () => {
  return (
    <NewsContext.Consumer>
      {({data}) => (
        data.articles.length > 0
        ? data.articles.map((article, index) => <div key={index}><Headline {...article} /></div>)
        : <Empty />
      )}
    </NewsContext.Consumer>
  )
}

export default HeadlineList;
