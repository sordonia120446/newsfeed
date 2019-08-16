import React from 'react';

import './static/App.css';

import NewsFeed from "./scripts/containers/newsfeed";
import Header from "./scripts/components/header";
import Footer from "./scripts/components/footer";


function App() {
  return (
    <div className="App">
      <Header />
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default App;
