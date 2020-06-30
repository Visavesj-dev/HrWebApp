import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Typography, Card, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Quiz from './host/Quiz';
import { fire } from "../../../../base";

const styles = (theme) => ({
  card: {
    padding: theme.spacing(3),
    marginTop : 200
  },
  button: {
    padding: '5px 100px 5px 100px',
  }
});

function fetchGame(gametype, gameId, callback) { // ดึงตัวเกม id ที่สร้างมา
  fire
    .database()
    .ref("games")
    .orderByChild("gameId")
    .equalTo(gameId)
    .once("value", callback);
}

class Host extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}, //game ที่ สรา้ง ex. quiz
      gametype: "other",
      gameId: localStorage.getItem("RecentGameId") || "", // id ล่าสุดจาก create
      password: "",
      isRedirected:
        Date.now() - localStorage.getItem("spotifytoken_timestamp") < 2000,
    };
    this.updateGame = this.updateGame.bind(this);
    this.initGameListiner = this.initGameListiner.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.quitGame = this.quitGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  componentDidMount() {
    const { gameId, isRedirected } = this.state;
    if (isRedirected) {
      this.joinGame(gameId);
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

  updateGame(gameupdate) {
    const { game } = this.state;

    fire
      .database()
      .ref(`games/${game.key}`)
      .update(gameupdate, (error) => {
        if (error) {
          console.log(error);
        }
      });
  }

  restartGame() {
    const game = {};
    game.players = [];
    game.phase = 'connection';
    this.updateGame(game);
  }

  quitGame() {
    this.updateGame({ phase: null });
  }

  endGame() {
    this.updateGame({ phase: 'final_result' });
  }

  joinGame(gameId) {
    const { password, gametype } = this.state;
    fetchGame(gametype, gameId, (snapshot) => {
      if (snapshot.val()) {
        let game;
        snapshot.forEach((child) => {
          game = child.val();
        });
        if (game.password === password) {
          this.initGameListiner(game);
        } else {
         alert("Could not find matching game")
        }
      } else {
        alert("Not Found")
      }
    });
  }

  initGameListiner(_game) {
    let gameRef;
    gameRef = fire.database().ref(`games/${_game.key}`);
    gameRef.on('value', (snapshot) => {
      const game = snapshot.val();
      if (!game.phase) {
        game.phase = 'connection';
      }
      if (game) {
        this.setState({
          game,
        });
      } else {
        this.setState({
          game: '',
        });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const {
        gameId, password, game, isRedirected, gametype,
      } = this.state;
      const gameFunctions = {
        update: this.updateGame,
        restart: this.restartGame,
        end: this.endGame,
        quit: this.quitGame,
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
           <CardContent>
           <Typography variant="h5" component="h2" align="center">
          Host Game
        </Typography>
           </CardContent>
          <Grid container spacing={2}>
            <Grid item md={12}>
            <FormControl fullWidth>
              <TextField
                label="Game PIN"
                name="Game ID"
                value={gameId}
                margin="normal"
                onChange={this.handleChange('gameId')}
              />
            </FormControl>
            </Grid>
            <Grid item md={12}>
            <FormControl fullWidth>
              <TextField
                label="Password"
                type="password"
                name="password"
                margin="normal"
                value={password}
                onChange={this.handleChange('password')}
              />
            </FormControl>
            </Grid>
            <Grid container md={12}  justify="center">
            <Button className={classes.button} onClick={() => this.joinGame(gameId)} variant="contained" color="secondary" disableElevation>Create Game</Button>
            </Grid>
          </Grid>
          </Card>
        );
      }
      return (
        <div className="page-container host-page">
          {game.gametype === 'quiz' && <Quiz game={game} gameFunc={gameFunctions} />}
        </div>
      );
  }
}

export default withStyles(styles)(Host);
