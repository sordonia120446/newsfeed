import React from 'react';

import topHeadlines from "../data/top_headlines";

import Loading from "../components/loading";
import HeadlineList from "./headlineList";


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
        <Loading />
        {this.state.loading ? <Loading /> : <HeadlineList data={this.state.data} />}
      </div>
    )
  }
}
