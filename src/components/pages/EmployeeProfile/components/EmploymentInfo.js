import React, { useState } from "react";

//import materials
import { Grid } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Container,
} from "@material-ui/core";

//import tools

//import style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  profile: {
    marginBottom: 20,
    width: "100%",
  },
  details: {
    display: "flex",
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function EmploymentInfo() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.profile}>
        <form autoComplete="off" noValidate>
          <CardHeader title="Employment & Compensation" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Start Date
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      December 5th, 2013
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>Title</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Trainer
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Work Location
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      TPE SITE 1
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Employment Type
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Full Time
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Compensation Type
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Salaried
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Annual Salary
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      $75,000
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>

      <Card className={classes.profile}>
        <form autoComplete="off" noValidate>
          <CardHeader title="​Work Experience" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Job Title
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Trainee Web Developer
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>Company</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      THAI POLYETHYLENE Company Limited
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>From</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      1/2020
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>To</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      4/2020
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Role Description
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Developing Face Recognit ion ( React JS ) 
                      Income and Tax web applicat ion ( React JS )  
                      Work Experience Bachelor of Engineering in Information System
                      and Network Engineering Currently studying in the Faculty
                      of Engineering at Chiangmai University
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
