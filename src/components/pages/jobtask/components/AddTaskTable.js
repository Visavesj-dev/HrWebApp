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
  CircularProgress,
} from "@material-ui/core";
// import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
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

const JobtaskTable = (props) => {
  const { className,tasks, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
  useEffect(() => {
    setPosts(tasks);
  }, []);

  const currentPosts = posts.slice(
    // ทำให้ข้อมูลเป็นหน้าปัจจุบัน
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const results = currentPosts.filter((item) => {
        return (item);
      });

  const handlePageChange = (event, page) => {
    setPage(page); // เปลี่ยนหน้า table
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const routeChange = (path) =>{ 
    props.history.push(path);
  }

  function Checkboxes(props) {
    const id =props.id
    const value= props.value
    const [checked] = React.useState(posts[id][value]);
    const handleChange = (event) => {
      let items = [...posts]
      let item ={...items[id]}
      item[value] = !item[value]
      items[id] = item
      setPosts(items)
    }

  return(
    <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
  };

  function TextFields(props){
    const id = props.id
    const [text,setText]  = React.useState(posts[id].detail)
    const handleChange=(e)=>{
      // let items = [...posts]
      // let item ={...items[id]}
      // item.detail = e.target.value
      // items[id] = item
      // setPosts(items)
      setText(e.target.value)
    }
    return(<TextField
      // value={text}
      // onChange={handleChange}
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
    )
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
                <h1>Add new Job</h1>
              </div>
              <div className={classes.row1}>
                Job's Name
              </div>
            </Grid>

            {/* ---Button ____ */}
            <Grid item xs={6} md={6}>
              <div className={classes.row2}>
                <span className={classes.spacer} />
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    props.history.push("/jobtask");
                  }}
                >
                  Go Back
                </Button>
              </div>
            </Grid>
            {/* ------------- */}
          </Grid>

          <Card className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <div className={classes.inner}>
                  <Table style={{ overflowX: "scroll" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align='center'>Task Detail</TableCell>
                        <TableCell align='center'>Critical Task</TableCell>
                        <TableCell align='center'>Knowledge</TableCell>
                        <TableCell align='center'>Skill</TableCell>
                        <TableCell align='center'>Attribute</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {results.map((item) => (
                          <React.Fragment>
                            <TableRow>
                            <TableCell>{<TextFields id={item.id}/>}</TableCell>
                            <TableCell align='center'>{<Checkboxes id={item.id} value='criticaltask'/>}</TableCell>
                            <TableCell align='center'>{<Checkboxes id={item.id} value='knowledge'/>}</TableCell>
                            <TableCell align='center'>{<Checkboxes id={item.id} value='skill'/>}</TableCell>
                            <TableCell align='center'>{<Checkboxes id={item.id} value='attribute'/>}</TableCell>
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
        </Grid>
      </Grid>
    </div>
  );
};

JobtaskTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(JobtaskTable);
