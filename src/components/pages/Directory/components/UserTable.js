import React, { useState, useEffect, useReducer } from "react";

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
  const [rowsPerPage, setRowsPerPage] = useState(10); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
  const [searchTerm, setSearchTerm] = React.useState(""); //searching

  const [state, setState] = React.useState({
    FullTime: false,
    PartTime: false,
    Active: false,
    Onboarding:false,
    Terminated: false,
    Rayong:false,
    Bangkok:false,
    Department1:false,
    Department2:false,
    Department3:false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { FullTime, PartTime, Active,Onboarding , Terminated,Rayong,Bangkok,Department1,Department2,Department3} = state;

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
    setPage(page); // เปลี่ยนหน้า table
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value); // handle search
  };

  const clear = () => {
    //function clear value
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
                      checked={Onboarding} 
                        onChange={handleChange} 
                        name="Onboarding"
                      />
                    }
                    label="Onboarding"
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
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Filter By location
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                      color="primary"
                        checked={Bangkok}
                        onChange={handleChange}
                        name="Bangkok"
                      />
                    }
                    label="Bangkok"
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                      color="primary"
                      checked={Rayong} 
                        onChange={handleChange} 
                        name="Rayong"
                      />
                    }
                    label="Rayong"
                  />
                  
                </FormGroup>
              </FormControl>
               <Divider />
               <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Filter By Department
                </FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={
                      <Checkbox
                      color="primary"
                        checked={Department1}
                        onChange={handleChange}
                        name="Department1"
                      />
                    }
                    label="Department1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                      color="primary"
                        checked={Department2}
                        onChange={handleChange}
                        name="Department2"
                      />
                    }
                    label="Department2"
                  />
                  
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                      color="primary"
                      checked={Department3} 
                        onChange={handleChange} 
                        name="Department3"
                      />
                    }
                    label="Department3"
                  />
                  
                </FormGroup>
              </FormControl>
               <Divider />
              
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
                      {results
                        .filter((item) => {
                        let TypeConditions=[],StatusConditions=[],ProvinceConditions=[],DepartmentConditions=[]
                        if(FullTime){TypeConditions.push('Full Time')}
                        if(PartTime){TypeConditions.push('Part Time')}
                        if(Active){StatusConditions.push('Active')}
                        if(Onboarding){StatusConditions.push('Onboarding')}
                        if(Terminated){StatusConditions.push('Terminated')}
                        if(Rayong){ProvinceConditions.push('Rayong')}
                        if(Bangkok){ProvinceConditions.push('Bangkok')}
                        if(Department1){DepartmentConditions.push('Department1')}
                        if(Department2){DepartmentConditions.push('Department2')}
                        if(Department3){DepartmentConditions.push('Department3')}
                        
                        if(TypeConditions.length+StatusConditions.length+ProvinceConditions.length+DepartmentConditions.length==0){
                          return item}
                        if(TypeConditions.length==0){
                          TypeConditions.push('Full Time')
                          TypeConditions.push('Part Time')
                        }
                        if(StatusConditions.length==0){
                          StatusConditions.push('Active')
                          StatusConditions.push('Onboarding')
                          StatusConditions.push('Terminated')
                        }
                        if(ProvinceConditions.length==0){
                          ProvinceConditions.push('Rayong')
                          ProvinceConditions.push('Bangkok')
                        }
                        if(DepartmentConditions.length==0){
                          DepartmentConditions.push('Department1')
                          DepartmentConditions.push('Department2')
                          DepartmentConditions.push('Department3')
                        }
                        

                        return TypeConditions.includes(item.type) && StatusConditions.includes(item.status) && ProvinceConditions.includes(item.province) && DepartmentConditions.includes(item.department)


                        })
                        .map((user) => (
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