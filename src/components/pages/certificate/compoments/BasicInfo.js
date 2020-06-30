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

export default function BasicInfo() {
    const classes = useStyles();

    return (
        <Card className={classes.profile}>
                <form autoComplete="off" noValidate>
                  <CardHeader title="Basic Info" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              First Name
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                            <TextField
                              id="outlined-full-width"
                             
                              fullWidth
                              margin="dense"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                        {/* ----*----- */}
                      </Grid>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              Last Name
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                            <TextField
                              id="outlined-full-width"
                              
                              fullWidth
                              margin="dense"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                        {/* ----*----- */}
                      </Grid>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              Email
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                            <TextField
                              id="outlined-full-width"
                              fullWidth
                              margin="dense"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                        {/* ----*----- */}
                      </Grid>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              Confirmed Email
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                            <TextField
                              id="outlined-full-width"
                              fullWidth
                              margin="dense"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                        {/* ----*----- */}
                      </Grid>
                    </Grid>
                  </CardContent>
                </form>
              </Card>
    )
}
