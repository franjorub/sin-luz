import React, { Component } from 'react';
import { subscribeToTimer } from './api';
import Tweet from "./Tweet";

class App extends Component {

  state = {
    tweets: []
  };

  constructor(props) {
    super(props);

    subscribeToTimer((err, tweets) => this.setState({ 
      tweets 
    }));
  }

  render() {
    const { tweets } = this.state
    return (
      <div className="App">
        { 
          tweets.length == 0 
            ? "No tweets yet." 
            : tweets.map((tweet) => {
                return <Tweet text={tweet.text} />
              })
        }
      </div>
    );
  }
}

export default App;
