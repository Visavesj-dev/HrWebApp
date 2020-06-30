import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import GenerateQuizForm from './GenerateQuizForm';

const styles = (theme) => ({
    card: {
      padding: theme.spacing(3),
    },
  });

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      correctAnswer: '',
      wrongAnswerOne: '',
      wrongAnswerTwo: '',
      wrongAnswerThree: '',
      timelimit: '10',
      qType: 'text',
      aType: 'multiple',
      generateQuestions: true,

    };
    this.sendQuestion = this.sendQuestion.bind(this);
    this.toggleGenerateQuestion = this.toggleGenerateQuestion.bind(this);
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleTrueFalse = (event) => {
    const answer = event.target.value;
    this.setState({
      correctAnswer: answer,
      wrongAnswerOne: answer === 'true' ? 'false' : 'true',
    });
  };

  handleChangeSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendQuestion() {
    const {
      question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, timelimit, qType, aType,
    } = this.state;
    const { addQuestion } = this.props;
    const q = {
      question,
      correctAnswers: [correctAnswer],
      wrongAnswers: [wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree],
      timelimit,
      qType,
      aType,
    };
    this.setState({
      question: '',
      correctAnswer: '',
      wrongAnswerOne: '',
      wrongAnswerTwo: '',
      wrongAnswerThree: '',
    });
    addQuestion(q);
  }

  toggleGenerateQuestion() {
    const { generateQuestions } = this.state;
    this.setState({
      generateQuestions: !generateQuestions,
    });
  }

  render() {
    const {
      question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, timelimit, qType, aType, generateQuestions,
    } = this.state;
    const { addQuestions, isTimelimit , classes } = this.props;
    if (generateQuestions) {
      return (
        <Card className={classes.card}>
          <Button style={{marginRight: 5}} onClick={this.toggleGenerateQuestion} variant="contained">Custom questions</Button>
          <Button onClick={this.toggleGenerateQuestion} disabled variant="contained">Auto generate questions</Button>
          <GenerateQuizForm addQuestions={addQuestions}  />
        </Card>
      );
    }
    return (
     
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{marginBottom: 15}}>
            <Button style={{marginRight: 5}} onClick={this.toggleGenerateQuestion} disabled variant="contained">Custom questions</Button>
            <Button onClick={this.toggleGenerateQuestion} variant="contained">Auto generate questions</Button>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl required fullWidth>
              <InputLabel htmlFor="qtype-required">Question type</InputLabel>
              <Select
                value={qType || ''}
                onChange={this.handleChangeSelect}
                name="qType"
                inputProps={{
                  id: 'qtype-required',
                }}
              >
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="image">Image</MenuItem>
                <MenuItem value="video">Video</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl required fullWidth>
              <InputLabel htmlFor="aType-required">Answer type</InputLabel>
              <Select
                value={aType || ''}
                onChange={this.handleChangeSelect}
                name="aType"
                inputProps={{
                  id: 'aType-required',
                }}
              >
                <MenuItem value="boolean">True/false</MenuItem>
                {/* <MenuItem value="player">Player</MenuItem> */}
                <MenuItem value="multiple">Mulitichoice</MenuItem>
                {/* <MenuItem value="free">Free text</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Question"
                name="question"
                value={question}
                margin="normal"
                onChange={this.handleChange('question')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          {aType === 'multiple'
                        && (
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>

                            <FormControl fullWidth>
                              <TextField
                                label="Correct answer"
                                name="correctAnswer"
                                margin="normal"
                                value={correctAnswer}
                                onChange={this.handleChange('correctAnswer')}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6}>

                            <FormControl fullWidth>
                              <TextField
                                label="Wrong answer"
                                name="wrongAnswerOne"
                                margin="normal"
                                value={wrongAnswerOne}
                                onChange={this.handleChange('wrongAnswerOne')}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6}>

                            <FormControl fullWidth>
                              <TextField
                                label="Wrong answer"
                                name="wrongAnswerTwo"
                                margin="normal"
                                value={wrongAnswerTwo}
                                onChange={this.handleChange('wrongAnswerTwo')}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6}>

                            <FormControl fullWidth>
                              <TextField
                                label="Wrong answer"
                                name="wrongAnswerThree"
                                margin="normal"
                                value={wrongAnswerThree}
                                onChange={this.handleChange('wrongAnswerThree')}
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        )
                    }
          {aType === 'boolean'
                        && (
                        <div>
                          <Grid item xs={12}>

                            <FormControl component="fieldset">
                              <FormLabel component="legend">Answer</FormLabel>
                              <RadioGroup
                                aria-label="answer"
                                name="correctAnswer"
                                value={correctAnswer}
                                onChange={this.handleTrueFalse}
                              >
                                <FormControlLabel value="true" control={<Radio />} label="True" />
                                <FormControlLabel value="false" control={<Radio />} label="False" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </div>
                        )
                    }
          {isTimelimit
                        && (
                        <Grid item xs={12}>

                          <FormControl>
                            <TextField
                              label="Time limit"
                              name="timelimit"
                              type="number"
                              value={timelimit}
                              margin="normal"
                              onChange={this.handleChange('timelimit')}
                            />
                          </FormControl>
                        </Grid>
                        )
                    }
                    </Grid>
          <Grid item xs={12}>
            <Button onClick={this.sendQuestion} variant="contained">Add question</Button>
          </Grid>
        </Grid>
        </Card>
    );
  }
}

export default withStyles(styles)(QuestionForm);
