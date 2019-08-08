import React from 'react';

import topHeadlines from "../data/top_headlines";


export default class NewsFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
    }
  }

  componentDidMount() {
    this.setState({ data: topHeadlines, loading: false });
  }

  render() {
    return (
      <div>
        {/* This will eventually be another component */}
        <h1>hi</h1>
      </div>
    )
  }
}
