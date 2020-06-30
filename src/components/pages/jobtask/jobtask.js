import React, { useState } from "react";

//import modules
import users from "./data/usersdata";
import tasks from "./data/tasksdata";
import JobtaskTable from "./components/JobtaskTable";

//import material
import Grid from "@material-ui/core/Grid";

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
