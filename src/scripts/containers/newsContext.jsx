import React from 'react'

const defaultState = {
  data: {
    articles: [],
  },
};

const NewsContext = React.createContext(defaultState);

export default NewsContext;
