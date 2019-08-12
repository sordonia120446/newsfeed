import React from 'react';

import Loading from "../components/loading";
import HeadlineList from "./headlineList";
import Error from "../components/error";


export default class NewsFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      showLoadingAnyway: false,
      error: null,
    }

    this.apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    this.handleShowClick = this.handleShowClick.bind(this);
  }

  componentDidMount() {
    fetch(this.apiUrl)
      .then(response => response.json()) // return in json format
      .then(responseData => {
        if (responseData.status === "ok") {
          this.setState({data: responseData, loading: false});
        } else {
          this.handleFetchError(responseData.message);
        }
      })
      .catch(error => {
        this.handleFetchError(error);
      });
  }

  handleShowClick() {
    this.setState((prevstate) => {
      return { showLoadingAnyway: !prevstate.showLoadingAnyway }
    });
  }

  handleFetchError(error) {
    return this.setState({error: error, loading: false});
  }

  render() {
    if (this.state.error) {
      return <Error message={this.state.error} />;
    }

    return (
      <div>
        <button onClick={this.handleShowClick} className="button4 lavender">Show Loading Anyway</button>
        {this.state.showLoadingAnyway && <Loading />}
        {this.state.loading ? <Loading /> : <HeadlineList {...this.state.data} />}
      </div>
    )
  }
}
