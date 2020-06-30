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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function EmploymentType() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Employee");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [value1, setValue1] = React.useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value1);
  };

  return (
    <Card className={classes.profile}>
      <form autoComplete="off" noValidate>
        {console.log(value)}
        <CardHeader title="Employment Type" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    Employment Type
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Employee"
                        control={<Radio color="primary"/>}
                        label="Employee"
                      />
                      <FormControlLabel
                        value="Contingent Worker"
                        control={<Radio color="primary"/>}
                        label="Contingent Worker"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            {value == "Employee" && 
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Classification</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange1}
                    >
                      <FormControlLabel
                        value="Full-time"
                        control={<Radio color="primary"/>}
                        label="Full-time"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      Employee who works more than 30 hours a week.
                    </Typography>
                      <FormControlLabel
                        value="Part-time"
                        control={<Radio color="primary"/>}
                        label="Part-time"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      Employee who works less than 30 hours a week.
                    </Typography>
                       <FormControlLabel
                        value="Intern"
                        control={<Radio color="primary"/>}
                        label="Intern"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      A student or trainee participating in an internship.
                    </Typography>
                    </RadioGroup>
                  </FormControl>
                  </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            } 
            {value == "Contingent Worker" &&
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Classification</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange1}
                    >
                      <FormControlLabel
                        value="Agency-paid Temp"
                        control={<Radio color="primary"/>}
                        label="Agency-paid Temp"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      A worker hired by an agency to gap-fill or perform miscellaneous functions at your company.
                    </Typography>
                      <FormControlLabel
                        value="Company-paid Temp"
                        control={<Radio color="primary"/>}
                        label="Company-paid Temp"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      A temporary worker who is paid directly through your company and usually receives a W-2 form..
                    </Typography>
                       <FormControlLabel
                        value="Independent Contractor"
                        control={<Radio color="primary"/>}
                        label="Independent Contractor"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      A self-employed worker who is hired to perform certain services for your company and usually receives a 1099 form.
                    </Typography>
                    <FormControlLabel
                        value="Volunteer"
                        control={<Radio color="primary"/>}
                        label="Volunteer"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      Anyone offering their time to work without wages or benefits.
                    </Typography>
                    <FormControlLabel
                        value="Vendor Employee"
                        control={<Radio color="primary"/>}
                        label="Vendor Employee"
                      />
                       <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      A worker from a vendor company, who has been engaged to perform a function you outsourced to them
                    </Typography>
                    </RadioGroup>
                  </FormControl>
                  </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            }
            
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
}
