import React, { useState } from "react";

//import modules
import newtask from './data/newtaskdata'
import jobdetail from './data/jobdetaildata'
import AddTaskTable from "./components/AddTaskTable"

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

export default function AddTask() {
  const classes = useStyles();
  const [newtaskdata] = useState(newtask)
  const [jobdetaildata] =useState(jobdetail)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <AddTaskTable tasks={newtaskdata} jobs={jobdetaildata} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
