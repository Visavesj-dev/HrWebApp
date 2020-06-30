import React, { useState } from "react";

//import modules
import tasks from './data/tasksdata'
import jobdetail from './data/jobdetaildata'
import AddSuggestionTable from "./components/AddSuggestionTable"
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

export default function AddSuggestion() {
  const classes = useStyles();
  const [taskdata] = useState(tasks)
  const [jobdetaildata] =useState(jobdetail) 
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <AddSuggestionTable tasks={taskdata} jobs={jobdetaildata}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}