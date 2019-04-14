import React from "react";
import Grow from "@material-ui/core/Grow";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
const Tweet = props => {
  const { text, user } = props;
  return (
    <Grow in={true}>
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
};

export default Tweet;
