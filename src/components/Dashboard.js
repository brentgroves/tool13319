import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import IssuesBarChartCard from "./IssuesBarChartCard";
import IssuesLineChartCard from "./IssuesLineChartCard";
import InstructionsCard from "./InstructionsCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  instructions: {
    padding: 14,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs6>
          <IssuesLineChartCard />
        </Grid>
        <Grid item xs6>
          <IssuesBarChartCard />
        </Grid>
        <Grid item xs6>
          <InstructionsCard />
        </Grid>
      </Grid>
    </Container>
  );
}
