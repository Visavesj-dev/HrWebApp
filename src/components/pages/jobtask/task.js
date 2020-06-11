import React, { useState } from "react";

//import modules
import newtask from './newtaskdata'
import taskdata from './tasksdata'
import IndividualTask from "./components/IndividualTask"
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

export default function Task() {
  const classes = useStyles();
  const [newtaskdata] = useState(newtask)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <IndividualTask tasks={taskdata} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
