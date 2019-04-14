import React from "react";
import Grow from "@material-ui/core/Grow";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";



export default class Tweet extends React.Component {

  state = {
    in: true
  }

  componentWillUnmount() {
    console.log("Component will unmount")
    this.setState({ in: false })
  } 

  render() {
    const { text, user } = this.props;
    return (
      <Grow in={this.state.in}>
        <Card>
          <CardHeader
            avatar={
              <Avatar alt="Remy Sharp" src={user.profile_image_url_https} />
            }
            title={user.name}
            subheader={user.created_at}
          />
          <CardContent>
            <Typography component="p">{text}</Typography>
          </CardContent>
        </Card>
      </Grow>
    );
  }
}



