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

//Icon
import EmailIcon from '@material-ui/icons/Email';
//import styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";


//SVGIcon
const NoDocIcon =()=> <svg id="Layer_1" enable-background="new 0 0 32 32" height="32" viewBox="0 0 35 35" width="32" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_2510_"><g id="XMLID_2232_"><g id="XMLID_2233_"><g id="XMLID_2234_"><g id="XMLID_2235_"><g id="XMLID_2236_"><g id="XMLID_2237_"><g id="XMLID_2238_"><g id="XMLID_2472_"><g id="XMLID_2478_"><g id="XMLID_2479_"><g id="XMLID_2480_"><g id="XMLID_2481_"><g id="XMLID_2482_"><g id="XMLID_2483_"><circle id="XMLID_3251_" cx="256" cy="256" fill="#00efd1" r="256"/></g></g></g></g></g></g></g></g></g></g></g></g></g></g><path id="XMLID_1155_" d="m512 256c0-11.456-.764-22.732-2.223-33.789l-104.833-104.834-31.014 5.36-50.006-49.604-215.859 362.952 60.635 60.635c27.245 9.883 56.641 15.28 87.3 15.28 141.385 0 256-114.615 256-256z" fill="#00cfb4"/><g id="XMLID_2042_"><path id="XMLID_2231_" d="m108.065 117.377h296.879v279.867h-296.879z" fill="#fff"/><path id="XMLID_2230_" d="m256 117.38h148.94v279.86h-148.94z" fill="#fff5ca"/><g id="XMLID_2222_"><circle id="XMLID_2224_" cx="256.503" cy="130.377" fill="#ff6326" r="88.467"/><path id="XMLID_2223_" d="m344.973 130.374c0 48.86-39.61 88.47-88.47 88.47v-176.93c48.86 0 88.47 39.599 88.47 88.46z" fill="#ff1f3d"/></g><g id="XMLID_2053_"><path id="XMLID_2218_" d="m151.838 317.31h38.162v30h-38.162z" fill="#324a5e"/><path id="XMLID_2216_" d="m224 317.31h137.171v30h-137.171z" fill="#324a5e"/><path id="XMLID_2214_" d="m256 317.31h105.17v30h-105.17z" fill="#1f3742"/><path id="XMLID_2210_" d="m151.838 257.31h138.912v30h-138.912z" fill="#324a5e"/><g fill="#1f3742"><path id="XMLID_2055_" d="m256 257.31h34.75v30h-34.75z"/><path id="XMLID_2054_" d="m324.5 257.31h36.671v30h-36.671z"/></g></g><g id="XMLID_2046_"><g><path id="XMLID_115_" d="m108.065 392.417h296.879v43.668h-296.879z" fill="#ff6326"/></g></g><g id="XMLID_2043_"><path id="XMLID_2045_" d="m256 392.42h148.94v43.67h-148.94z" fill="#ff1f3d"/></g></g><g id="XMLID_2039_"><path id="XMLID_2041_" d="m311.667 160.1-29.724-29.723 29.724-29.724-25.441-25.44-29.723 29.724-29.724-29.724-25.44 25.44 29.724 29.724-29.724 29.723 25.44 25.441 29.724-29.724 29.723 29.724z" fill="#fff"/><path id="XMLID_2040_" d="m281.943 130.377 29.72 29.72-25.437 25.447-29.721-29.73v-50.875l29.721-29.729 25.437 25.447z" fill="#fff5ca"/></g></g></svg>
const DocIcon =()=>  <svg id="Layer_1" enable-background="new 0 0 32 32" height="32" viewBox="0 0 35 35" width="32" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_805_"><g id="XMLID_477_"><g id="XMLID_478_"><g id="XMLID_479_"><g id="XMLID_480_"><g id="XMLID_481_"><g id="XMLID_482_"><g id="XMLID_483_"><g id="XMLID_484_"><g id="XMLID_485_"><g id="XMLID_486_"><g id="XMLID_487_"><g id="XMLID_488_"><g id="XMLID_489_"><g id="XMLID_490_"><circle id="XMLID_491_" cx="256" cy="256" fill="#45f6ff" r="256"/></g></g></g></g></g></g></g></g></g></g></g></g></g></g><path id="XMLID_2228_" d="m512 256c0-33.094-6.281-64.721-17.714-93.755l-89.411-89.411-297.75 366.333 55.119 55.119c29.035 11.433 60.662 17.714 93.756 17.714 141.385 0 256-114.615 256-256z" fill="#2ebeef"/><path id="XMLID_1428_" d="m107.125 72.833h297.749v366.333h-297.749z" fill="#fff"/><path id="XMLID_457_" d="m256 72.83h148.87v366.34h-148.87z" fill="#fff5ca"/><g id="XMLID_1427_"><path id="XMLID_171_" d="m256 136h108.667v30h-108.667z" fill="#1f3742"/></g><g id="XMLID_1426_"><path id="XMLID_173_" d="m147.333 118.667h64.667v64.667h-64.667z" fill="#00efd1"/></g><g id="XMLID_1424_"><path id="XMLID_170_" d="m256 241h108.667v30h-108.667z" fill="#1f3742"/></g><g id="XMLID_1423_"><g><path id="XMLID_38_" d="m147.333 223.667h64.667v64.667h-64.667z" fill="#ff6326"/></g></g><g id="XMLID_1421_"><path id="XMLID_119_" d="m256 346h108.667v30h-108.667z" fill="#1f3742"/></g><g id="XMLID_1420_"><path id="XMLID_93_" d="m147.333 328.667h64.667v64.667h-64.667z" fill="#00efd1"/></g></g></svg>
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
  const [rowsPerPage, setRowsPerPage] = useState(10); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
const [searchTerm, setSearchTerm] = React.useState(""); //searching

 //test
// const [test,setTest] = useState("")
// const [test2,setTest2] = useState("")

//   const handleChange = (event) => {
//     setTest(event.target.value)
//   };

//   const handleChange1 = (event) => {
//     setTest2(event.target.value)
//   };

const [state, setState] = React.useState({
    FullTime: false,
    PartTime: false,
    Active: false,
    Terminated: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { FullTime, PartTime, Active , Terminated} = state;

  //---*---//


  //searching
  useEffect(() => {
    setPosts(users);
  }, []);

  const currentPosts = posts.slice(
    // ทำให้ข้อมูลเป็นหน้าปัจจุบัน
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
    setPage(page);// เปลี่ยนหน้า table
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value); // handle search
  };

  const clear = () => { //function clear value
    setSearchTerm("");
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3} md={2}>
          <div>
          {console.log(Active)}
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
                        checked={FullTime} 
                        onChange={handleChange} 
                        name="FullTime"
                      />
                    }
                    label="Full Time"
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={PartTime} 
                        onChange={handleChange} 
                        name="PartTime"
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
                        checked={Active}
                        onChange={handleChange}
                        name="Active"
                      />
                    }
                    label="Active"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                         checked={Terminated}
                        onChange={handleChange}
                        name="Terminated"
                      />
                    }
                    label="Terminated"
                  />
                </FormGroup>
              </FormControl>
              <Divider />
             {/* <FormControl component="fieldset" className={classes.formControl}>
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
              </FormControl> */}
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
                        <TableCell>Offer letter</TableCell>
                        {/* <TableCell>Status</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Start date</TableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Set user data here */}
                      {results.filter((item)=> {
                          if(FullTime == false && PartTime == false && Active == false && Terminated == false){
                              return item
                          }else if(FullTime == true && PartTime == false && Active == false && Terminated == false){
                              return item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == false && Terminated == false){
                              return item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == false && Terminated == false){
                              return item
                          }else if(FullTime == false && PartTime == false && Active == true && Terminated == false){
                              return item.status == "Active"
                          }else if(FullTime == true && PartTime == false && Active == true && Terminated == false){
                              return item.status == "Active" && item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == true && Terminated == false){
                              return item.status == "Active" && item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == true && Terminated == false){
                              return item.status == "Active"
                          }else if(FullTime == false && PartTime == false && Active == false && Terminated == true){
                              return item.status == "Terminated"
                          }else if(FullTime == true && PartTime == false && Active == false && Terminated == true){
                              return item.status == "Terminated" && item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == false && Terminated == true){
                              return item.status == "Terminated" && item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == false && Terminated == true){
                              return item.status == "Terminated"
                          }else if(FullTime == true && PartTime == false && Active == true && Terminated == true){
                              return item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == true && Terminated == true){
                              return item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == true && Terminated == true){
                              return item
                          }                     
                      }).map((user) => (
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
                          <TableCell> {DocIcon()}<EmailIcon/> </TableCell>
                          <TableCell> {DocIcon()} </TableCell>
                          {/* <TableCell>{user.type}</TableCell>
                          <TableCell>{user.status}</TableCell>
                          <TableCell>Tranier</TableCell>
                          <TableCell>TPE</TableCell>
                          <TableCell>
                            {user.address.city}, {user.address.state},{" "}
                            {user.address.country}
                          </TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            {moment(user.createdAt).format("DD/MM/YYYY")}
                          </TableCell> */}
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
