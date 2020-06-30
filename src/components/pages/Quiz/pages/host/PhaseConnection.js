import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardActions, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  card: {
    padding: theme.spacing(2),
    marginTop: 100,
    width: 800,
    height: 600,
  },
  button: {
    padding: "5px 100px 5px 100px",
  },
});

class PhaseConnection extends Component {
  constructor(props) {
    super(props);
    this.nextPhase = this.nextPhase.bind(this);
  }

  nextPhase() {
    this.props.gameFunc.update({ phase: "starting" });
  }

  // add function to kick player
  render() {
    const { classes } = this.props;
    let players = this.props.game.players;
    if (!players) {
      players = [];
    } else {
      players = Object.values(players);
    }
    return (
      <Card className={classes.card}>
        <Typography variant="h2" align="center">
          Waiting Player...
        </Typography>
        <Typography variant="h2" align="center">
          <span>Enter game PIN: </span>
          <span>{this.props.game.gameId}</span>
        </Typography>
        <Typography variant="subtitle1">{this.props.game.title}</Typography>
        <Grid container>
          <CardContent style={{ height: 300 }}>
            <Grid container>
              {players.map((player, index) => (
                <Grid key={index} item xs={3}>
                  <Typography
                    paragraph
                    variant="body1"
                    className="dynamic-text"
                  >
                    {player.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <Divider />
          <Grid container md={12} justify="center">
            <CardActions>
              <Button
                onClick={this.nextPhase}
                variant="contained"
                color="secondary"
                disableElevation
              >
                Start
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    );
  }
}
export default withStyles(styles)(PhaseConnection);
