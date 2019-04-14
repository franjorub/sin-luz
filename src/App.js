import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { subscribeToTimer } from "./api";
import Tweet from "./Tweet";

class App extends Component {
  state = {
    tweets: []
  };

  constructor(props) {
    super(props);

    subscribeToTimer((err, tweets) =>
      this.setState({
        tweets
      })
    );
  }

  render() {
    const { tweets } = this.state;
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={4}>
            {tweets.length === 0
              ? "No tweets yet."
              : tweets.map(tweet => {
                  return (
                    <Grid container spacing={8}>
                      <Grid item xs={12}>
                        <Tweet text={tweet.text} user={tweet.user} />
                        <Divider />
                      </Grid>
                    </Grid>
                  );
                })}
          </Grid>
          <Grid item xs={8}>
            <div style={{ backgroundColor: "red" }} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
