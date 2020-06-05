import React, { useState } from "react";

//import materials
import { Grid } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

//import style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: 45,
  },
  profile: {
    marginBottom: 20,
    width: "85%",
  },
  details: {
    display: "flex",
  },
  avatar: {
    marginRight: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    marginTop: 15,
  },
  tabs1: {
    width: "85%",
    marginTop: 15,
  },
}));

export default function HealthBenefits() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    health1: true,
    health2: false,
    health3: false,
    health11: false,
    health12: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { health1, health2, health3, health11, health12 } = state;

  return (
    <Card className={classes.profile}>
      <form autoComplete="off" noValidate>
        <CardHeader title="Health Benefits " />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={6} xs={12}>
                  <Typography className={classes.heading}>
                    Select which health benefits Emily is eligible to enroll in.
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Assign responsibility
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={health1}
                            onChange={handleChange}
                            name="health1"
                          />
                        }
                        label="Medical"
                      />
                      <FormHelperText>
                        Coverage will take effect on 06/01/2020
                      </FormHelperText>
                      {health1 == true && (
                        <div style={{ marginLeft: 30 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={health11}
                                onChange={handleChange}
                                name="health11"
                              />
                            }
                            label="PPO Direct+ 1500-500"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={health12}
                                onChange={handleChange}
                                name="health12"
                              />
                            }
                            label="PPO Direct + 5500 - GSDF"
                          />
                        </div>
                      )}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={health2}
                            onChange={handleChange}
                            name="health2"
                          />
                        }
                        label="Dental"
                      />
                      <FormHelperText>
                        Coverage will take effect on 06/01/2020
                      </FormHelperText>
                      {health2 == true && (
                        <div style={{ marginLeft: 30 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={health11}
                                onChange={handleChange}
                                name="health11"
                              />
                            }
                            label="DeltaCare USA 10A-A"
                          />
                        </div>
                      )}

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={health3}
                            onChange={handleChange}
                            name="health3"
                          />
                        }
                        label="Vision"
                      />
                      <FormHelperText>
                        Coverage will take effect on 06/01/2020
                      </FormHelperText>
                      {health3 == true && (
                        <div style={{ marginLeft: 30 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={health11}
                                onChange={handleChange}
                                name="health11"
                              />
                            }
                            label="Signature B - 10"
                          />
                        </div>
                      )}
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
}
