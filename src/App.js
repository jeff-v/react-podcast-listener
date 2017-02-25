import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {get} from 'podson'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed:[],
      parsedFeed:[]
    }
    this.handlePodcastFeed = this.handlePodcastFeed.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({feed: event.target.value})
  }

  handlePodcastFeed(e) {
    get(this.state.feed, (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      this.setState({parsedFeed: JSON.stringify(data)})

      console.log(data)

    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Podcast</h2>
        </div>
        <p className="App-intro">
          <input type="text" value={this.state.feed} onChange={this.handleChange} />
          <button onClick={this.handlePodcastFeed} />
        </p>
      </div>
    );
  }
}

export default App;
