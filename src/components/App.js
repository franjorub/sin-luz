import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { subscribeToTimer } from "../api";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import Tweet from "./Tweet";
import Chart from "./Chart"


class App extends Component {
  state = {
    tweets: [],
    data: {}
  };

  constructor(props) {
    super(props);

    subscribeToTimer((err, tweets, data) =>
      this.setState({
        tweets,
        data
      })
    );
  }

  renderTweets = (tweets) =>
    tweets.map(tweet => (
      
        <Grid item xs={12} key={tweet.id}>
          <Tweet text={tweet.text} user={tweet.user}/>
          <Divider />
        </Grid>
      
    ));

  render() {
    const { tweets } = this.state;
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container spacing={8} justify="center">
              <Grid item xs={12}>
                <Typography component="h3" align="center" variant="title">Latest Tweets</Typography>
              </Grid>
              {this.renderTweets(tweets)}
              <Grid container justify="center">
                <CircularProgress /> 
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12}>

                <Chart data={this.state.data}/>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h2" align="center" variant="title">What is this project about?</Typography>
                <Typography component="p" variant="body1">
                  It will be displayed in real time tweets about people using the hashtag #sinluz, the idea is to show in a quantifiable way which are the states where most are reporting electrical service failures in Venezuela.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
