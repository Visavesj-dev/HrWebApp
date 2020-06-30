import React, { useState, useEffect, useReducer } from "react";

//import material
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

const AddTaskTable = (props) => {
  const { className, tasks, jobs, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
  const [job, setJob] = useState([]);
  useEffect(() => {
    setPosts(tasks);
    setJob(jobs);
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
    const [jobId, setJobId] = useState();
    const [jobDetail, setJobDetail] = useState();
    const handleChange = (event) => {
      setJobId(event.target.value);
      let tmp = job.filter((item) => {
        return item.jobId == event.target.value;
      });
      setJobDetail(tmp[0].detail);
    };
    return (
      <Grid container spacing={3}>
      <Grid item xs={3} md={3}>
        <FormControl fullWidth className={classes.formControl}> 
          <InputLabel fullWidth id="demo-simple-select-label">Select Job</InputLabel>
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
        /></Grid></Grid>
    );
  }
  function Checkboxes(props) {
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

  function TextFields(props) {
    const id = props.id;
    const [text, setText] = React.useState(posts[id].detail);
    const handleChange = (e) => {
      let items = [...posts];
      let item = { ...items[id] };
      item.detail = e.target.value;
      items[id] = item;
      setPosts(items);
      setText(e.target.value);
    };
    return (
      <TextField
        value={text}
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

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <div className={classes.row1}>
            <h1>Assign task</h1>
          </div>
          </Grid>
            {SelectJob()}
      <Grid item xs={12} md={12}>
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
                        <TableCell width="80%" align="center">
                          Task Detail
                        </TableCell>
                        <TableCell align="center">Critical Task</TableCell>
                        <TableCell align="center">Knowledge</TableCell>
                        <TableCell align="center">Skill</TableCell>
                        <TableCell align="center">Attribute</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {results.map((item) => (
                        <React.Fragment>
                          <TableRow>
                            <TableCell>{<TextFields id={item.id} />}</TableCell>
                            <TableCell align="center">
                              {<Checkboxes id={item.id} value="criticaltask" />}
                            </TableCell>
                            <TableCell align="center">
                              {<Checkboxes id={item.id} value="knowledge" />}
                            </TableCell>
                            <TableCell align="center">
                              {<Checkboxes id={item.id} value="skill" />}
                            </TableCell>
                            <TableCell align="center">
                              {<Checkboxes id={item.id} value="attribute" />}
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

AddTaskTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(AddTaskTable);
