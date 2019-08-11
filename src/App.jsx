import React from 'react';

import './static/App.css';

import NewsFeed from "./scripts/containers/newsfeed";
import Header from "./scripts/components/header";


function App() {
  return (
    <div className="App">
      <Header />
      <NewsFeed />
    </div>
  );
}

export default App;
