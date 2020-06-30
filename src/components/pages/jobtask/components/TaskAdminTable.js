import React, { useState, useEffect, useReducer } from "react";

//import material
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Input,
  Paper,
  Link,
  Button,
  Select,
  CircularProgress,
} from "@material-ui/core";
import getInitials from "../modules/getInitials";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import { withRouter } from "react-router-dom";
// import Modal from '@material-ui/core/Modal';
//import Tools
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";

//import styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Jobtask from "../jobtask";
import { ContactPhoneOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  detail: {
    fontSize: "16.5px",
  },
  content: {
    padding: 0,
    overflowX: "auto",
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    width: "100px",
    height: "100px",
  },
  actions: {
    justifyContent: "flex-end",
  },
  row1: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2.6),
  },
  counterRow: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2.6),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
  rootSearch: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "auto",
    overflowX: "scroll",
  },
  headerText: {
    textAlign: "left",
    color: "#212121",
  },
  formControl: {
    margin: theme.spacing(1),
  },
  counterLabel:{
    width: "20%",
    textAlign:"center",
    fontSize:'20px',
    marginLeft: "5px",
  },
  counterBox1: {
    width: "20%",
    height: "90px",
    textAlign:"center",
    fontSize:'45px',
    fontWeight:'bold',
    background: "#EFAD18",
    marginLeft: "5px",
    color:'white'
  },
  counterBox2: {
    width: "20%",
    height: "90px",
    textAlign:"center",
    fontSize:'45px',
    fontWeight:'bold',
    background: '#93DC52',
    marginLeft: "5px",
    color:'white'
  },
  counterBox3: {
    width: "20%",
    height: "90px",
    textAlign:"center",
    fontSize:'45px',
    fontWeight:'bold',
    background: '#DB553D',
    marginLeft: "5px",
    color:'white'
  },
  counterBox4: {
    width: "20%",
    height: "90px",
    textAlign:"center",
    fontSize:'40px',
    fontWeight:'bold',
    background: '#3D6CDB',
    marginLeft: "5px",
    color:'white'
  },
  font1:{
    fontSize:'15px',
    color:"black"
  },
  colorText: {
    color: "#212121",
    textAlign: "center",
  },
  row2: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  row3: {
    height: "30px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  modal: {
    "max-height": "calc(100vh - 210px)",
    "overflow-y": "auto",
  },
  papermodal: {
    "max-height": "calc(100vh - 210px)",
    "overflow-y": "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TaskAdminTable = (props) => {
  const { className, tasks, jobs, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
  const [learningSuggestion, setLearningSuggestion] = useState([]);
  const [job, setJob] = useState([]);
  const [jobId, setJobId] = useState(
    parseInt(props.location.pathname.split("/").pop())
  );

  useEffect(() => {
    setJob([jobs]);
    let temp = tasks.filter((item) => {
      return item.jobId == jobId;
    });
    setPosts(temp[0].jobtask);
    setLearningSuggestion(tasks[jobId].learningSuggestion);
  }, []);

  const currentPosts = posts.slice(
    // ทำให้ข้อมูลเป็นหน้าปัจจุบัน
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const results = currentPosts.filter((item) => {
    return item;
  });

  const handlePageChange = (event, page) => {
    setPage(page); // เปลี่ยนหน้า table
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const routeChange = (path) => {
    props.history.push(path);
  };
  function Checkboxes(props) {
    console.log(props.id);
    const id = props.id;
    const value = props.value;
    const [checked] = React.useState(posts[id][value]);
    const handleChange = (event) => {
      let items = [...posts];
      let item = { ...items[id] };
      item[value] = !item[value];
      items[id] = item;
      setPosts(items);
    };

    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    );
  }
  function counter() {
    let counterComplete = 0;
    let counterTasks = posts.length + 1;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].isComplete) {
        counterComplete += 1;
      }
    }
    let percent = counterComplete/counterTasks*100
    percent = percent.toFixed(2)
    return (
      <Grid item xs={6} md={6}>
        <div className={classes.counterRow}>
          <Paper className={classes.counterBox1}>{counterTasks}<div className={classes.font1}>All tasks</div></Paper>
          <Paper className={classes.counterBox2}>{counterComplete}<div className={classes.font1}>Complete tasks</div></Paper>
          <Paper className={classes.counterBox3}>{counterTasks-counterComplete}<div className={classes.font1}>In progress</div></Paper>
          <Paper className={classes.counterBox4}>
            {percent} <div className={classes.font1}>%</div>
          </Paper>
        </div>
      </Grid>
    );
  }
  function SelectMethod(props) {
    let id = props.id;
    let tmp = learningSuggestion.filter((item) => {
      return item.id == id;
    });
    // console.log(id)
    // console.log(tmp)
    let selectvalue = tmp[0].method;

    const handleChange = (event) => {
      let items = [...learningSuggestion];
      let item = items[id];
      item["method"] = event.target.value;
      items[id] = item;
      setLearningSuggestion(items);
    };
    return (
      <Select
        native
        value={selectvalue}
        onChange={handleChange}
        inputProps={{
          name: "age",
          id: "age-native-simple",
        }}
      >
        <option aria-label="None" value="" />
        <option value={1}>Method1</option>
        <option value={2}>Method2</option>
        <option value={3}>Method3</option>
      </Select>
    );
  }

  function SuggestionTextfiled(props) {
    let id = props.id;
    let tmp = learningSuggestion.filter((item) => {
      return item.id == id;
    });
    let textfiledvalue = tmp[0].detail;
    const handleChange = (event) => {
      let items = [...learningSuggestion];
      let item = items[id];
      item["detail"] = event.target.value;
      items[id] = item;
      setLearningSuggestion(items);
    };
    return (
      <TextField
        value={textfiledvalue}
        onChange={handleChange}
        label="Label"
        style={{ margin: 8 }}
        placeholder="Task Detail"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    );
  }
  function IsCriticalTask(criticaltask) {
    if (criticaltask) {
      return "red";
    } else return "black";
  }
  
  function TaskCatagories(props) {
    let ct, k, s, a; //criticaltask, knowledge,skill,attribute
    ct = props.criticaltask;
    k = props.knowledge;
    s = props.skill;
    a = props.attribute;
    let catagories = "";
    if (k) {
      catagories += "K ";
    }
    if (s) {
      catagories += "S ";
    }
    if (a) {
      catagories += "A ";
    }
    return (
      <div>
        <div className={classes.detail}>
          {catagories} 
        </div>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={3}>
        {/* left tab for filtering*/}
        {/* Table */}
        <Grid item xs={12} md={12}>
          <Card marginBottom="100">
            <Grid container spacing={3}>
              {/* Profile Card */}
              <Grid item xs={2} md={2}>
                <Avatar
                  className={classes.avatar}
                  src={"/images/avatars/avatar_3.png"}
                >
                  {getInitials("Kobsak")}
                </Avatar>
              </Grid>
              <Grid item xs={3} md={3}>
                <div className={classes.row3}>Name : Ekaterina Tankova</div>
                <div className={classes.row3}>
                  Position : Chemical Engineering
                </div>
                <div className={classes.row3}>Department : Department1</div>
              </Grid>
            </Grid>
          </Card>

          <Card className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <div className={classes.inner}>
                  <Table
                    style={{
                      overflowX: "scroll",
                      width: "auto",
                      tableLayout: "auto",
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell width="40%" align="center">
                          Task Detail
                        </TableCell>
                        <TableCell width="10%">Catagories</TableCell>
                        <TableCell>Complete</TableCell>
                        <TableCell>Assesment</TableCell>
                        <TableCell>Learning Suggestion</TableCell>
                        <TableCell>Method</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {results.map((item) => (
                        <React.Fragment>
                          <TableRow>
                            <TableCell>
                              <div className={classes.detail}>
                                <font color={IsCriticalTask(item.criticaltask)}>
                                  {item.detail}
                                </font>
                              </div>
                            </TableCell>
                            <TableCell>
                              <TaskCatagories
                                criticaltask={item.criticaltask}
                                knowledge={item.knowledge}
                                skill={item.skill}
                                attribute={item.attribute}
                              />
                            </TableCell>
                            <TableCell>
                              <Checkboxes id={item.id} value={"isComplete"} />
                            </TableCell>
                            <TableCell>
                              <Button variant="contained" component="label">
                                Upload File
                                <input
                                  type="file"
                                  style={{ display: "none" }}
                                />
                              </Button>
                            </TableCell>
                            <TableCell>
                              <SuggestionTextfiled id={item.id} />
                            </TableCell>
                            <TableCell>
                              <SelectMethod id={item.id} />
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
              <TablePagination
                component="div"
                count={posts.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
                backIconButtonProps={{
                  "aria-label": "Previous Page",
                }}
                nextIconButtonProps={{
                  "aria-label": "Next Page",
                }}
              />
            </CardActions>
          </Card>
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className={classes.row2}>Comment</div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="Comment"
                label="Comment"
                rows={4}
                multiline
                fullWidth
                height="250px"
                variant="outlined"
              />
            </form>
            </Grid>
          </Grid>
          <Grid container>
            {counter()}
            <Grid item xs={2} md={2}></Grid>
            <Grid item xs={4} md={4}>
              <div className={classes.row1}></div>
              <div className={classes.row1}>
                <Grid container spacing={1}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      props.history.push("/jobtask");
                    }}
                  >
                    Save Draft
                  </Button>
                </Grid>
                <Grid container spacing={1}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      props.history.push("/jobtask");
                    }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid container spacing={1}>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      props.history.push("/jobtask");
                    }}
                  >
                    Go Back
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/*main grid*/}
      </Grid>
    </div>
  );
};

TaskAdminTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(TaskAdminTable);
