import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom';

//import modules


//import material
import Grid from "@material-ui/core/Grid";
import { Typography, Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

//import Tools


//import styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    width: "95%",
  },
  content: {
    margin: theme.spacing(3),
  },
  card1: {
    margin: theme.spacing(3),
    background: 'linear-gradient(#e66465, #9198e5);',
    color: "white",
  },
  card2: {
    margin: theme.spacing(3),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: "white",
  },
  card3: {
    margin: theme.spacing(3),
    background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
  }
}));

export default function Quiz() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
          <Grid item xs={12}>
            <Typography variant="h3" align="center">SCG Quiz</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/play" style={{textDecoration: "none"}}>
              <Card className="card-button" className={classes.card1}>
                <CardHeader title="Play" align="center" />
                <CardContent>
                  <Typography variant="subtitle1" align="center">Connect to a game as player</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/host" style={{textDecoration: "none"}}>
              <Card className="card-button" className={classes.card2}>
                <CardHeader title="Host" align="center"/>
                <CardContent>
                  <Typography variant="subtitle1" align="center">Host a created game using game pin</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/create" style={{textDecoration: "none"}}>
              <Card className="card-button" className={classes.card3}>
                <CardHeader title="Create" align="center" />
                <CardContent>
                  <Typography variant="subtitle1" align="center">Setup a new game and recive a related game pin</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
    </div>
  )
}
