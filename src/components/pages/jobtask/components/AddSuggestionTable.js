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
    marginRight: theme.spacing(2),
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

const AddSuggestion = (props) => {
  const { className, tasks, jobs, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
  const [job, setJob] = useState([]);
  const [jobId, setJobId] = useState(55555);
  useEffect(() => {
    setPosts([]);
    setJob(jobs);
    // console.log(jobs);
    // console.log(tasks);
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
  function SelectJob() {

    const [jobDetail, setJobDetail] = useState();
    const handleChange = (event) => {
      setJobId(event.target.value);
      let tmp = job.filter((item) => {
        return item.jobId == event.target.value;
      });
      setJobDetail(tmp[0].detail);
      let tmp2 = tasks.filter((item)=>{
        return item.jobId == event.target.value
      });
      setPosts(tmp2[0].jobtask)
      console.log(posts)
    };
    return (
      <Grid container spacing={3}>
        <Grid item xs={3} md={3}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel fullWidth id="demo-simple-select-label">
              Select Job
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobId}
              className={classes.selectEmpty}
              onChange={handleChange}
            >
              {job.map((item) => {
                return <MenuItem value={item.jobId}>{item.jobName}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            disabled
            label="Job's Detail"
            value={jobDetail}
            style={{ margin: 8 }}
            placeholder="Job's Detail"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
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
    let color = "black";
    let catagories = "";
    if (ct) {
      color = "red";
    }
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
          <font color={color}>{catagories}</font>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={3}>
        {/* left tab for filtering*/}
        {/* Table */}
        <Grid item xs={11} md={12}>
          {/*Top of the table searching and adding button */}
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <div className={classes.row1}>
                <h1>Add Suggestion</h1>
              </div>
            </Grid>
            <Grid item xs={4} md={4}>
              <div className={classes.row1}></div>
            </Grid>
          </Grid>
          {SelectJob()}
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
                        <TableCell>Learning Suggestion</TableCell>
                        <TableCell>Method</TableCell>
                        {/* <TableCell align="center">Critical Task</TableCell>
                        <TableCell align="center">Knowledge</TableCell>
                        <TableCell align="center">Skill</TableCell>
                        <TableCell align="center">Attribute</TableCell> */}
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
                              <TextField
                                label="Learning Suggestion"
                                style={{ margin: 8 }}
                                placeholder="Learning Suggestion"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                              />
                            </TableCell>
                            <TableCell>
                              <Select
                                native
                                // value={state.age}
                                // onChange={handleChange}
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
            <Grid item xs={8} md={8}></Grid>
            <Grid item xs={4} md={4}>
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
        </Grid>{" "}
        {/*main grid*/}
      </Grid>
    </div>
  );
};

AddSuggestion.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(AddSuggestion);
