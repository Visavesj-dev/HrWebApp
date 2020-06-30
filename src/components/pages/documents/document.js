import React, { useState } from "react";

//import modules
import mockData from "./data";
import UsersToolbar from "./components/UserToolBar";
import DocumentTable from "./components/DocumentTable";

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

export default function Document() {
  const classes = useStyles();
  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          {/* <UsersToolbar /> */}
          <div className={classes.content}>
            <DocumentTable users={users} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
