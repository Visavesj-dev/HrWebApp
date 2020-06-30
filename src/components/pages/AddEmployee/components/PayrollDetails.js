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

export default function PayrollDetails() {
  const classes = useStyles();

  //time1
  const [selectedDate, setSelectedDate] = React.useState(new Date(''));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //time2
  const [selectedDate1, setSelectedDate1] = React.useState(new Date(''));
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  //Type
  const [type, setType] = React.useState("");
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  return (
    <Card className={classes.profile}>
      <form autoComplete="off" noValidate>
        <CardHeader title="Payroll Details " />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Day/Shift</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={type}
                      onChange={handleChangeType}
                    >
                      <Grid container>
                        <Grid item md={6}>
                          <FormControlLabel
                            value="Day"
                            control={<Radio />}
                            label="Day"
                          />
                        </Grid>
                        <Grid item md={6}>
                          <FormControlLabel
                            value="Shift"
                            control={<Radio />}
                            label="Shift"
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {/* ----*----- */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* ----*----- */}
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.heading}>Time In</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
 
                <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
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
                  <Typography className={classes.heading}>Time Out</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
 
                <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          value={selectedDate1}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change time',
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
                            Average Weekly Hours
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                            <TextField
                              id="outlined-full-width"
                              type="number"
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
  );
}
