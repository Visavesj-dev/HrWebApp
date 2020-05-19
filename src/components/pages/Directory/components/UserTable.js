import React, { useState, useEffect } from "react";

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
} from "@material-ui/core";
import SearchInput from "../modules/SearchInput";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

//import Tools
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";
import axios from "axios";

//import styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
    overflowX: "scroll",
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
}));

const UsersTable = (props) => {
  const { className, users, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]);

  //searching
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    setPosts(users);
 }, []);

//   useEffect(() => {
//     //  setPosts(users);
//     const results = users.filter(person => 
        
//        person.toString().toLowerCase().includes(searchTerm)
//   );
//       setPosts(results);
//     // console.log(results)
//   }, [searchTerm]);



  const currentPosts = posts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const results = !searchTerm
    ? currentPosts
    : currentPosts.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangeSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <div className={classes.row1}>
            {/* <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        /> */}
            <Paper className={classes.rootSearch}>
              <SearchIcon className={classes.icon} />
              <Input
                className={classes.input}
                disableUnderline
                type="text"
                placeholder="Search user"
                onChange={handleChangeSearch}
                value={searchTerm}
              />
            </Paper>
          </div>
        </Grid>
      </Grid>
      <Card  className={clsx(classes.root, className)}>
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
                    <TableCell>Registration date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Set user data here */}
                  {results.map((user) => (
                    <TableRow className={classes.tableRow} hover key={user.id}>
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Avatar
                            className={classes.avatar}
                            src={user.avatarUrl}
                          >
                            {getInitials(user.name)}
                          </Avatar>
                          <Typography variant="body1">{user.name}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>Full Time</TableCell>
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
    </div>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default UsersTable;
