import React, { useState } from "react";

//import modules
import users from "./usersdata";
import tasks from "./tasksdata";
import UsersToolbar from "./components/UserToolBar";
import JobtaskTable from "./components/JobtaskTable";

//import material
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

//import Tools
import Moment from "react-moment";
import NumberFormat from "react-number-format";

//import styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    width: "95%",
  },
  content: {
    marginTop: theme.spacing(0),
  },
}));

export default function Jobtask() {
  const classes = useStyles();
  const [usersdata] = useState(users);
  const [tasksdata] = useState(tasks);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          {/* <UsersToolbar /> */}
          <div className={classes.content}>
            <JobtaskTable users={usersdata} tasks={tasksdata} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
