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
import MenuItem from '@material-ui/core/MenuItem';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


//import style
import clsx from "clsx";
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

const currencies = [
  {
    label: 'TPE',
    value: 'TPE'
  }
];

const managers = [
  {
    label: 'เชียงแสน วิศเวศ',
    value: 'เชียงแสน วิศเวศ'
  }
];

const jobs = [
  {
    label: 'Engineer',
    value: 'Engineer'
  }
];

export default function JobDetails() {
  const classes = useStyles();

  //
  const [currency, setCurrency] = React.useState('');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  //
  const [selectedDate, setSelectedDate] = React.useState(new Date(''));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //Manager
  const [manager, setManager] = React.useState('');
  const handleChangeManager = (event) => {
    setManager(event.target.value);
  };

  //Job
  const [job, setJob] = React.useState('');
  const handleChangeJob = (event) => {
    setJob(event.target.value);
  };

  return (
    <Card className={classes.profile}>
      <form autoComplete="off" noValidate>
        <CardHeader title="Job Details " />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Employee Id</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    fullWidth
                    margin="dense"
                    type="number"
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
                  <Typography className={classes.heading}>Job Title</Typography>
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
                    Job Category
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={job}
                    onChange={handleChangeJob}
                    variant="outlined"
                  >
                    {jobs.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>

            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    Division
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    Department
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    Section
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Hire Date</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
 
                <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="dense"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
        

            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>
                    Reporting Manager
                  </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={manager}
                    onChange={handleChangeManager}
                    variant="outlined"
                  >
                    {managers.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
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
