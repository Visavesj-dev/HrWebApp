import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import GameIcon from "@material-ui/icons/VideogameAsset";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { fire } from "../../../../base";
import Quiz from "./Play/Quiz";

function fetchGame(gametype, gameId, callback) {
  fire
    .database()
    .ref("games")
    .orderByChild("gameId")
    .equalTo(gameId)
    .once("value", callback);
}

const styles = (theme) => ({
  card: {
    padding: theme.spacing(3),
    marginTop: 200,
  },
  button: {
    padding: "5px 100px 5px 100px",
  },
});

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      gameId: "",
      gametype: "other",
      recentGameId: localStorage.getItem("RecentGameIdPlay") || "",
      playerKey: "",
      recentGame: null,
      isRedirected:
        Date.now() - localStorage.getItem("spotifytoken_timestamp") < 2000,
    };
    this.createPlayer = this.createPlayer.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }

  componentDidMount() {
    const { recentGameId, isRedirected } = this.state;
    if (isRedirected) {
      this.joinGame(recentGameId);
    }
    if (recentGameId) {
      // behöver spara recentgametype?
      fetchGame("default", recentGameId, (snapshot) => {
        if (snapshot.val()) {
          let game;
          snapshot.forEach((child) => {
            game = child.val();
          });
          if (game.status === "IN_PROGRESS") {
            this.setState({ recentGame: game });
          }
        }
      });
    }
  }

  handleChangeSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  joinGame(gameId) {
    const { gametype } = this.state;
    const that = this;
    fetchGame(gametype, gameId, (snapshot) => {
      if (snapshot.val()) {
        let game;
        snapshot.forEach((child) => {
          game = child.val();
        });
        // får skapa en ny attribut, canPlayerJoin true/false om det begövs
        if (game.phase === "connection") {
          const storedPlayerKey = localStorage.getItem("RecentPlayerKey");
          if (
            storedPlayerKey &&
            game.players &&
            game.players[storedPlayerKey]
          ) {
            that.setState({ playerKey: storedPlayerKey });
          }
          that.initGameListiner(game);
        } else if (game.phase === "setup") {
          alert("Game is not start yet");
        } else {
          const storedPlayerKey = localStorage.getItem("RecentPlayerKey");
          if (
            storedPlayerKey &&
            game.players &&
            game.players[storedPlayerKey]
          ) {
            that.setState({ playerKey: storedPlayerKey });
            localStorage.setItem("RecentGameIdPlay", game.gameId);
            that.initGameListiner(game);
          } else {
            alert("Game is in progress");
          }
        }
      } else {
        alert("Game is found");
      }
    });
  }

  initGameListiner(_game) {
    let gameRef;

    gameRef = fire.database().ref(`games/${_game.key}`);

    gameRef.on("value", (snapshot) => {
      const game = snapshot.val();
      if (game) {
        // kan blir problem med asynch setstate?
        this.setState({
          game,
        });
      } else {
        this.setState({
          game: "",
        });
      }
    });
  }

  createPlayer(player) {
    const { game } = this.state;
    let playerRef;

    playerRef = fire.database().ref(`/games/${game.key}/players`).push();

    const newPlayer = Object.assign({ key: playerRef.key }, player);

    playerRef.set(newPlayer, (error) => {
      if (error) {
        alert("Unexpected internal error");
      } else {
        this.setState({
          playerKey: newPlayer.key,
        });
        localStorage.setItem("RecentPlayerKey", newPlayer.key);
      }
    });
  }

  render() {
    const {
      game,
      playerKey,
      gameId,
      recentGameId,
      recentGame,
      isRedirected,
      gametype,
    } = this.state;
    const { classes } = this.props;

    const gameAvatars = {
      quiz: <GameIcon />,
    };
    if (!game.phase && isRedirected) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    }
    if (!game.phase) {
      return (
        <Card className={classes.card}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <FormControl fullWidth>
                <TextField
                  label="Game PIN"
                  name="Game ID"
                  value={gameId}
                  margin="normal"
                  onChange={this.handleChange("gameId")}
                />
              </FormControl>
            </Grid>
            <Grid container md={12}  justify="center">
              <Button
                className={classes.button}
                onClick={() => this.joinGame(gameId)}
                variant="contained"
                color="secondary"
                disableElevation
              >
                Join
              </Button>
            </Grid>
          </Grid>
          {recentGame && (
            <div>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{gameAvatars[recentGame.gametype]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={recentGame.title}
                    secondary={recentGame.gameId}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="reconnect"
                      onClick={() => this.joinGame(recentGameId)}
                    >
                      <Typography>reconnect</Typography>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          )}
        </Card>
      );
    }
    return (
      <div style={{ marginTop: 100 }}>
        {game.gametype === "quiz" && (
          <Quiz
            game={game}
            createPlayer={this.createPlayer}
            playerKey={playerKey}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Play);
