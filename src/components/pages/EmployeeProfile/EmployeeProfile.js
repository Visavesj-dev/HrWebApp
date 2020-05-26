import React, { useState } from "react";

//import materials
import { Grid } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  TextField,
  Container,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

//import tools
import moment from "moment";
import mockData from "../../pages/Directory/data";

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
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  tabs1: {
    width: "85%",
    marginTop: 20,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function EmployeeProfile(props) {
  const classes = useStyles();

  // For Taps
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //-----*-----//

  // Get ID
  React.useEffect(() => {
    console.log(props.match.params.id);
  }, []);

  //test Demo
  const user = {
    avatar: "/images/avatars/avatar_11.png",
  };

  return (
    <div className={classes.root}>
      <Container>
        {/* Left Side */}
        <Grid container spacing={1}>
          <Grid item md={5} xs={12}>
            <Card style={{ width: "85%", marginTop: 25 }}>
              <CardContent>
                <div className={classes.details}>
                  <Avatar className={classes.avatar} src={user.avatar} />
                  <div style={{ margin: "auto" }}>
                    <Typography gutterBottom variant="h6">
                      Visavesj Chiangsan
                    </Typography>
                    <Typography
                      className={classes.locationText}
                      color="textSecondary"
                      variant="body1"
                    >
                      Trainer (Full-Time), Fitness Training
                    </Typography>
                    <Typography
                      className={classes.dateText}
                      color="textSecondary"
                      variant="body1"
                    >
                      Started on December 5th, 2013
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.tabs1}>
              <Card>
                <CardContent>
                  <Tabs
                    orientation="vertical"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    style={{ marginLeft: 60 }}
                  >
                    <Tab label="Personal Profile" {...a11yProps(0)} />
                    <Tab label="Employee & Compensation" {...a11yProps(1)} />
                    <Tab label="Work Groups" {...a11yProps(2)} />
                    <Tab label="Back & Paychecks" {...a11yProps(3)} />
                    <Tab label="Documents" {...a11yProps(4)} />
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </Grid>

          {/* Right Side  */}
          {/* Basic Info */}

          <Grid item md={7} xs={12}>
            <TabPanel value={value} index={0}>
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
                              Visavesj
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
                            <Typography className={classes.heading}>
                              Phone
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
                              Email
                            </Typography>
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
            </TabPanel>

            {/* index 2 */}
            <TabPanel value={value} index={1}>
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
                            <Typography className={classes.heading}>
                              Title
                            </Typography>
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
            </TabPanel>

            {/* index 3 */}
            <TabPanel value={value} index={2}>
              <Card className={classes.profile}>
                <form autoComplete="off" noValidate>
                  <CardHeader title="Work Groups" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        {/* ----*----- */}
                        <Grid container spacing={0}>
                          <Grid item md={5} xs={12}>
                            <Typography className={classes.heading}>
                            Department
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              .............................................................
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
                           Projects
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              .............................................................
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
                           Position
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              .............................................................
                            </Typography>
                          </Grid>
                        </Grid>
                        {/* ----*----- */}
                      </Grid>
                      
                    </Grid>
                  </CardContent>
                </form>
              </Card>
            </TabPanel>

            {/* index 4 */}
            <TabPanel value={value} index={3}>
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
                            <Typography className={classes.secondaryHeading}>
                              *****6789
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
                              Account Number
                            </Typography>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Typography className={classes.secondaryHeading}>
                              *****1627
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
            </TabPanel>

            {/* index 5 */}
            <TabPanel value={value} index={4}>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
