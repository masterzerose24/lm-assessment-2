import React, { Component } from 'react';
import NewsSearch from './NewsSearch/NewsSearch';
import './index.css';

export class App extends Component {
  headerComponent(name) {
    return (
      <h1 className="ui center aligned header"> {name} News App</h1>
    )
  }

  render() {
    return (
      <div className="main-container ui container center">
        {this.headerComponent('Sample')}
        <NewsSearch></NewsSearch>
      </div>
    );
  }
}

export default App;
