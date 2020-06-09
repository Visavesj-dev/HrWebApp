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
import ZoomInIcon from '@material-ui/icons/ZoomIn';

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

export default function BankAccount() {
  const classes = useStyles();

  const [show , setShow ] = useState(false);

  const handleEvent = () => {
    const event = !show
    setShow(event);
  }

  return (
    <div>
     <Card className={classes.profile}>
                <form autoComplete="off" noValidate>
                  <CardHeader title="Bank Accounts" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              Account Type
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              Checking
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
                              Routing Number
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                          <div style={{display: "flex"}}>  
                          { show ? 
                            <Typography className={classes.secondaryHeading}>
                              123456789
                            </Typography>
                            :
                            <Typography className={classes.secondaryHeading}>
                              *****6789
                            </Typography>
                          }
                            <ZoomInIcon fontSize="small" style={{marginLeft: 30}} onClick={handleEvent}/>
                            </div>
                            
                          </Grid>
                        </Grid>
                        {/* ----*----- */}
                      </Grid>

                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              Account Number
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                          <div style={{display: "flex"}}>  
                        
                            <Typography className={classes.secondaryHeading}>
                              123456789
                            </Typography>
                           
                            <ZoomInIcon fontSize="small" style={{marginLeft: 30}} />
                            </div>
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
                  <CardHeader title="Paychecks" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                              Payment Method
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              Direct Deposit
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
                              Paycheck Distribution
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              (*****1627)
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
                              Payment Descriptiom
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              ...............................................
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
