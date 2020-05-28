import React, { useState, useEffect ,useReducer } from "react";

//import modules
import getInitials from "../modules/getInitials";

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
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import { withRouter } from "react-router-dom";

//import Tools
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";

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
    height: 525,
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
}));

const UsersTable = (props) => {
  const { className, users, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(3); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array

const [states,setTood] = useState("")
 // Test
//   const [state, setState] = React.useState({
//     Fulltime: false,
//     Parttime: false,
//   });

  const handleChange = (event) => {
    // setSearchTerm(event.target.value);
    // setState({ ...state, [event.target.name]: event.target.checked });
    setState(event.target.checked)
    
  };

   const { Parttime, Fulltime, gilad, jason, antoine } = states;


  const initialState = {
    click: false,
    change: false
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, setState] = useReducer(reducer, initialState);

  //---*---//

  //searching
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    setPosts(users);
  }, []);

  const currentPosts = posts.slice(
    // ทำให้ข้อมูลเป็นหน้าปัจจุบัน
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // checkbox filter 

//   const Checkbox = ({ fnClick, fnChange, title = "", checked = false }) => (
//     <label>
//       <input
//         onChange={e => {
//           if (fnChange !== undefined) fnChange(e.target.checked);
//         }}
//         type="checkbox"
//         checked={checked}
//       />
//       {" Checkbox " + title}
//     </label>
//   );

//   const checkFilter = !searchTerm
//     ? currentPosts
//     : currentPosts.filter((person) => {
//         return (
//           person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
//           person.phone.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//         );
//       });

  //

  const results = !searchTerm
    ? currentPosts
    : currentPosts.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          person.phone.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          person.type.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
      });

  const handlePageChange = (event, page) => {
    // เปลี่ยนหน้า table
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangeSearch = (event) => {
    // handle search
    setSearchTerm(event.target.value);
  };

  const clear = () => {
    //function clear value
    setState(initialState);
    setSearchTerm("");
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3} md={2}>
          <div>
          {console.log(state.change)}
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.colorText}
              >
                Infomation Filter
              </Typography>
              <Divider />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Type
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                    //     color="primary"
                    //     // onChange={handleChange}
                    //     name="Fulltime"
                    //     // checked={Fulltime}
                        
                    //    onChange={handleChange}
                    //     checked={state.change}
                    title="Change"
                    // fnChange={v => setState({ change: v })}
                    checked={state.change}


                      />
                    }
                    label="Full Time"
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        value={"Part Time"}
                        onChange={handleChange}
                        name="Parttime"
                        checked={Parttime}
                      />
                    }
                    label="Part Time"
                  />
                </FormGroup>
              </FormControl>
              <Divider />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Status
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={gilad}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label="Active"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={jason}
                        onChange={handleChange}
                        name="jason"
                      />
                    }
                    label="Terminated"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={antoine}
                        onChange={handleChange}
                        name="antoine"
                      />
                    }
                    label="Hiring/Onboarding"
                  />
                </FormGroup>
              </FormControl>
              <Divider />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Department
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={gilad}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label="Scg"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={jason}
                        onChange={handleChange}
                        name="jason"
                      />
                    }
                    label="Scg"
                  />
                </FormGroup>
              </FormControl>
              <center>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => clear()} //Clear value
                  disableElevation
                >
                  Clear Information
                </Button>
              </center>
            </Paper>
          </div>
        </Grid>

        {/* Table */}
        <Grid item xs={9} md={10}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              {/* Searching */}
              <div className={classes.row1}>
                <Paper className={classes.rootSearch}>
                  <SearchIcon className={classes.icon} />
                  <Input
                    className={classes.input}
                    disableUnderline
                    type="text"
                    placeholder="Search user"
                    onChange={handleChangeSearch}
                    // value={searchTerm}
                  />
                </Paper>
              </div>
            </Grid>

            {/* ---Button ____ */}
            <Grid item xs={6} md={6}>
              <div className={classes.row2}>
                <span className={classes.spacer} />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    props.history.push("/addEmployee");
                  }}
                >
                  Add Employee
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
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Start date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Set user data here */}
                      {results.map((user) => (
                        <TableRow
                          className={classes.tableRow}
                          hover
                          key={user.id}
                        >
                          <TableCell
                            onClick={() => {
                              props.history.push("/profile/" + user.id);
                            }}
                          >
                            <div className={classes.nameContainer}>
                              <Avatar
                                className={classes.avatar}
                                src={user.avatarUrl}
                              >
                                {getInitials(user.name)}
                              </Avatar>
                              <Link variant="body1">{user.name}</Link>
                            </div>
                          </TableCell>
                          <TableCell>{user.type}</TableCell>
                          <TableCell>Acive</TableCell>
                          <TableCell>Tranier</TableCell>
                          <TableCell>TPE</TableCell>
                          <TableCell>
                            {user.address.city}, {user.address.state},{" "}
                            {user.address.country}
                          </TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            {moment(user.createdAt).format("DD/MM/YYYY")}
                          </TableCell>
                        </TableRow>
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

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(UsersTable);
