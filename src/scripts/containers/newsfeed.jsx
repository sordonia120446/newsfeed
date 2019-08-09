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
      showLoadingAnyway: false,
    }

    this.handleShowClick = this.handleShowClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: topHeadlines, loading: false });
    }, 2000);
  }

  handleShowClick() {
    this.setState((prevstate) => {
      return { showLoadingAnyway: !prevstate.showLoadingAnyway }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowClick} className="button4 lavender">Show Loading Anyway</button>
        {this.state.showLoadingAnyway && <Loading />}
        {this.state.loading ? <Loading /> : <HeadlineList data={this.state.data} />}
      </div>
    )
  }
}
