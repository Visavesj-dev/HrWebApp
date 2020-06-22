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
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


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

const currencies = [
    {
      label: 'TPE',
    }
  ];

export default function OfferDetails() {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
      );

    const classes = useStyles();
  const [value, setValue] = React.useState("Employee");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [currency, setCurrency] = React.useState('');

  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  return (
        <Card className={classes.profile}>
                <form autoComplete="off" noValidate>
                  <CardHeader title="Enter the details" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                            Offer Letter
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
                        value="Don't include an offer letter"
                        control={<Radio color="primary"/>}
                        label="Don't include an offer letter"
                      />
                      <FormControlLabel
                        value="Use an offer letter template"
                        control={<Radio color="primary"/>}
                        label="Use an offer letter template"
                      />
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
                            <Typography className={classes.heading}>
                            Hiring Agreements
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
                            Company Handbooks
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
                            Offer Expiration Date
                            </Typography>
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
                        "aria-label": "change date",
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
                            Compensation Type
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                          <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={currency}
                    onChange={handleChange1}
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
                            Amount
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
                            Report Hours
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                          <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    margin="dense"
                    value={currency}
                    onChange={handleChange1}
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
                            Time Off Policy
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
                            Additional Terms
                            </Typography>
                          </Grid>
                          <Grid item md={7} xs={12}>
                          <TextField
          id="outlined-multiline-static"
          fullWidth
          multiline
          rows={6}
          defaultValue="Default Value"
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
