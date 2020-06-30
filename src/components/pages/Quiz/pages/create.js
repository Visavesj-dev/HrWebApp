import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import CreateQuiz from './create/createQuiz';
import { fire } from '../../../../base';
import { generateGameId } from '../../../common/utils/appUtil';
import { withStyles } from '@material-ui/core/styles';

//import styles
const styles = theme => ({
    root: {
        marginTop: 100,
        width: "95%",
      },
});

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gametype: 'quiz', // type ของ เกม quiz ,minigane etc.
      gameId: '', // ค่า id
    };
    this.createGame = this.createGame.bind(this);
  }

    setGameType = name => () => {
      this.setState({ gametype: name });  //type of game 
    };

    createGame(g) {
      const game = g;
      game.gameId = generateGameId(); // fucntion สร้าง id 
      game.created = Date.now(); // เวลาสร้าง 
      game.status = 'CREATED';
      game.phase = 'connection';

     
      // game push id.
      let gameRef;
     
      gameRef = fire.database().ref('/games').push(); // get pin from firebase
      game.key = gameRef.key;  
      gameRef.set(game, (error) => {
        if (error) { 
          this.setState({
            errorText: `Error: ${error}`,
          });
        } else {
          this.setState({
            gameId: game.gameId, // เก็บค่า id 
            gametype: 'done', 
          });
          localStorage.setItem('RecentGameId', game.gameId); // เก็บค่า pin ชั่วคราว

          // show gameid and password
          // show button to start game / navigate to host
        }
      });
    }

    render() {
      const { classes } = this.props;
      const { gametype, gameId } = this.state;
      return (
        <div className={classes.root}>
          {!gametype && (
          <Grid container spacing={2}>
            <Grid item xs={6}>
            {/* ให้เกมtye เป็น quiz */}
              <Card className="card-button" onClick={this.setGameType('quiz')}> 
                <CardHeader title="Quiz" align="center"/>
                <CardContent>
                  <Typography variant="subtitle1" align="center">Create your own quiz or generate one fast and easy</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} >
              <Card className="card-button" >
                <CardHeader title="Mini Game" align="center"/>
                <CardContent>
                  <Typography variant="subtitle1" align="center">Create your own quiz or generate one fast and easy</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} >
              <Card className="card-button" >
                <CardHeader title="Mini Game" align="center"/>
                <CardContent>
                  <Typography variant="subtitle1" align="center">Create your own quiz or generate one fast and easy</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} >
              <Card className="card-button" >
                <CardHeader title="Mini Game" align="center"/>
                <CardContent>
                  <Typography variant="subtitle1" align="center">Create your own quiz or generate one fast and easy</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          )}
          {gametype === 'quiz' && 
          <CreateQuiz createQuiz={this.createGame} /> // สำหรับ quiz , 1 ~
          }
          {gametype === 'done' // ถ้าสำเร็จ ให้เเสดง pin id  , 2 ~
                    && (
                    <div>
                      <Typography variant="h2">
                        <span>Created game PIN: </span>
                        {' '}
                        <span className="dynamic-text">{gameId}</span> 
                        {/* สร้างid เกม */}
                      </Typography>
                      <Link to="/host">Host game</Link> 
                    </div>
                    )
                }
        </div>
      );
    }
}

export default withStyles(styles)(Create);
