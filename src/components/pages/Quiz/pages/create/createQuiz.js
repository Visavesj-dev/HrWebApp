import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography, Card } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import Question from "./Question";
import QuestionForm from "./QuestionForm";
import { calculateDefaultTimeLimit } from "../../../../common/utils/appUtil";

const styles = (theme) => ({
  card: {
    padding: theme.spacing(3),
  },
});

class CreateQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      gametype: "quiz",
      gamemode: "normal",
      timelimit: true,
      timescore: false,
      questions: [],
      gamePass: "",
    };
    this.addQuestion = this.addQuestion.bind(this);
    this.addQuestions = this.addQuestions.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.createQuiz = this.createQuiz.bind(this);
  }

  handleChange = (name) => (event) => {
    // กรอกข้อมูลปกติ
    this.setState({
      [name]: event.target.value, // เลือกจากชื่อ เเละส่ง event
    });
  };

  handleChangeBool = (name) => (event) => {
    //เลือกเวลาในการเล่นเกมส์
    this.setState({ [name]: event.target.checked });
  };

  handleChangeSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addQuestion(q) { // เพิ่มทีละข้อ
    const { questions, timelimit } = this.state;
    const question = q;
    if (questions.length === 0) {
      question.id = 1;
    } else {
      // คำนวณ ID เป็น ID สูงสุดในปัจจุบัน + 1 สามารถใช้ ID ทั้งเป็นตัวระบุที่ไม่ซ้ำกัน
      question.id = Math.max(...questions.map((o) => o.id)) + 1;
    }
    if (timelimit && !question.timelimit) {
      question.timelimit = calculateDefaultTimeLimit(question);
    }
    questions.push(question); // เอา question ใส่ลง array
    this.setState({
      questions
    });
  }

  addQuestions(qs) { // เพิ่ม คำถาม เเบบหลายๆข้อ
    const { questions, timelimit } = this.state;
    for (let i = 0; i < qs.length; i++) {
      const question = qs[i];
      if (questions.length === 0) {
        question.id = 1;
      } else {
        question.id = Math.max(...questions.map((o) => o.id)) + 1;
      }
      if (timelimit && !question.timelimit) {
        question.timelimit = calculateDefaultTimeLimit(question);
      }
      questions.push(question);
    }
    this.setState({
      questions,
    });
  }

  deleteQuestion(question) {
    const { questions } = this.state;
    const index = questions.map((e) => e.id).indexOf(question.id); // find id in arrray
    questions.splice(index, 1);
    this.setState({
      questions,
    });
  }

  createQuiz() {
    const { createQuiz } = this.props;
    const {
      timelimit,
      gamePass,
      gametype,
      title,
      timescore,
      questions,
    } = this.state;
    const game = {
      password: gamePass,
      gametype,
      tile: title,
      quiz: {
        gamemode: "normal",
        timelimit,
        timescore,
        questions,
      },
    };
    createQuiz(game);
  }

  render() {
    const {
      timelimit,
      gamePass,
      title,
      timescore,
      gamemode,
      questions,
    } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={2}>
        <Grid item md={12}>
          <Card className={classes.card}>
            <Grid item xs={12} style={{ marginBottom: 10 }}>
              <Typography variant="h4">Create New Quiz</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <form autoComplete="off">
                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <FormLabel component="legend">Game Mode</FormLabel>
                    <Select
                      value={gamemode || ""}
                      onChange={this.handleChangeSelect}
                      name="gamemode"
                      inputProps={{
                        id: "gamemode-required",
                      }}
                    >
                      <MenuItem value="normal">Normal</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" style={{ marginTop: 10 }}>
                    <FormLabel component="legend">Game options</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={timelimit}
                            onChange={this.handleChangeBool("timelimit")}
                            value="timelimit"
                          />
                        }
                        label="Time limited questions"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={timescore}
                            onChange={this.handleChangeBool("timescore")}
                            value="timescore"
                          />
                        }
                        label="Time based score"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl style={{marginRight: 20}} fullWidth>
                    <TextField
                      label="Title"
                      name="title"
                      value={title}
                      margin="normal"
                      onChange={this.handleChange("title")}
                    />
                  </FormControl>
                  
                  <FormControl fullWidth>
                    <TextField
                      label="Password"
                      type="password"
                      name="gamePass"
                      margin="normal"
                      value={gamePass}
                      onChange={this.handleChange("gamePass")}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={this.createQuiz} variant="contained">
                    Create quiz
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Card>
          </Grid>
          <Grid item md={12}>

          
            <QuestionForm
              addQuestions={this.addQuestions}
              addQuestion={this.addQuestion}
              isTimelimit={!!timelimit}
            />
        </Grid>
        
            {questions.map((question, index) => (
              <Grid item xs={12} md={3} key={question.id}>
                <Question
                  question={question}
                  transitionDelay={index}
                  deleteQuestion={this.deleteQuestion}
                />
              </Grid>
            ))}
          
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(CreateQuiz);
