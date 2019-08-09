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
    setTimeout(() => {
      this.setState({ data: topHeadlines, loading: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> : <HeadlineList data={this.state.data} />}
      </div>
    )
  }
}
