import React, { useState } from "react";

//import modules
import mockData from "./data";
import UsersToolbar from "./components/UserToolBar";
import UsersTable from "./components/UserTable";

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
}));

export default function Directory() {
  const classes = useStyles();
  const [users] = useState(mockData);

  // Test
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  //---*---//

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={2}>
          <div>
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
                        color="primary"
                        checked={gilad}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label="Full Time"
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
                        checked={gilad}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label="Active"
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
                    label="Terminated"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={antoine}
                        onChange={handleChange}
                        name="antoine"
                      />
                    }
                    label="Hiring/Onboarding"
                  />
                </FormGroup>
              </FormControl>
              <Divider />
              <FormControl component="fieldset" className={classes.formControl}>
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
              </FormControl>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={9} md={10}>
          {/* <UsersToolbar /> */}
          <div className={classes.content}>
            <UsersTable users={users} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
