import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AvatarMenuCard({
  Push,
  msalInstance,
  name,
  username,
  companyName,
  jobTitle,
}) {
  const classes = useStyles();

  const handleSignout = () => {
    alert(`Signout`);
    Push("/");
    msalInstance.logout();
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {companyName}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {name}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {username}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {jobTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSignout}>
          Signout
        </Button>
      </CardActions>
    </Card>
  );
}
