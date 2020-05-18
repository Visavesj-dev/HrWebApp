import React, { useState } from 'react';

//import modules
import mockData from './data';
import UsersToolbar from './components/UserToolBar';
import UsersTable from './components/UserTable';

//import material


//import Tools
import Moment from "react-moment";
import NumberFormat from "react-number-format";

//import styles
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 75,
      marginBottom: 20,
     
      width: "90%",
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default function Directory() {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
}
