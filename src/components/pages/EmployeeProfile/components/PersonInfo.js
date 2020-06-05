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

export default function PersonInfo() {
  const classes = useStyles();

  return (
    <div>
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
                      Legal Name
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Visavesj Chiangsan
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
                      NickName
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Ice
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
                      Legal Gender
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Male
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
                      Date of Birth
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      July 14th, 1970
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
                      Social Security Number
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      ***-**-1234
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>

      {/* Contect */}
      <Card className={classes.profile}>
        <form autoComplete="off" noValidate>
          <CardHeader title="Contact Info" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>Phone</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      099 - 979 - 9594
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>Email</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Steve3hs68dhsgf@demo.zenefits.com
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
                      Work Phone
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      099 - 979 - 9594
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
                      Work Email
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      ice@hotmail.com
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>


      {/* Education */}
      <Card className={classes.profile}>
        <form autoComplete="off" noValidate>
          <CardHeader title="Education Info" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>School or University</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      ChiangMai University
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>from</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      2559
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>

              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>To (Actual or Expected)</Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      2563
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
                    Degree
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      Bachelor
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
                    Overall Result (GPA)
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      4.00
                    </Typography>
                  </Grid>
                </Grid>
                {/* ----*----- */}
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>

      {/* Addresses */}
      <Card className={classes.profile}>
        <form autoComplete="off" noValidate>
          <CardHeader title="Address" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
                {/* ----*----- */}
                <Grid container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <Typography className={classes.heading}>
                      Home Address
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography className={classes.secondaryHeading}>
                      1702 Redwood Hwy Corte Madera, CA 94925
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
