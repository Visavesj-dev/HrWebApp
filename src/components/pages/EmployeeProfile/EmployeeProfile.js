import React, { useState } from "react";

//import materials
import { Grid } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Divider,
  Container,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

//import tools
import PersonInfo from "./components/PersonInfo";
import EmploymentInfo from "./components/EmploymentInfo";
import WorkGroup from "./components/WorkGroup";
import BankAccount from "./components/BankAccount";
import JobProfile from "./components/JobProfile";
import HealthProfile from "./components/HealthProfile";
import LearningProfile from "./components/LearningProfile";

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
    width: "100%",
  },
  details: {
    display: "flex",
  },
  avatar: {
    marginRight: 30,
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    marginLeft: 30,
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
  tabs: {
    width: "100%",
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
      {value === index && <Box p={3}>{children}</Box>}
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
            <Card style={{ width: "100%", marginTop: 25 }}>
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
                      Trainer (Full-Time), Web Developer
                    </Typography>
                    <Typography
                      className={classes.dateText}
                      color="textSecondary"
                      variant="body1"
                    >
                      Started on January 1st, 2020
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.tabs}>
              <Card>
                <CardContent>
                  <Tabs
                    orientation="vertical"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    style={{ marginLeft: "20%", flexGrow: 1, display: "flex" }}
                  >
                    <Tab label="Personal Profile" {...a11yProps(0)} />
                    <Tab label="Employee & Compensation" {...a11yProps(1)} />
                    <Tab label="Work Groups" {...a11yProps(2)} />
                    <Tab label="Back & Paychecks" {...a11yProps(3)} />
                    <Tab label="Job Profile" {...a11yProps(4)} />
                    <Tab label="Health Profile" {...a11yProps(5)} />
                    <Tab label="Learning Profile" {...a11yProps(6)} />
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </Grid>

          {/* Right Side  */}
          {/* Basic Info */}

          <Grid item md={7} xs={12}>
            <TabPanel value={value} index={0}>
              <PersonInfo />
            </TabPanel>

            {/* index 2 */}
            <TabPanel value={value} index={1}>
              <EmploymentInfo />
            </TabPanel>

            {/* index 3 */}
            <TabPanel value={value} index={2}>
              <WorkGroup />
            </TabPanel>

            {/* index 4 */}
            <TabPanel value={value} index={3}>
              <BankAccount />
            </TabPanel>

            {/* index 5 */}
            <TabPanel value={value} index={4}>
              <JobProfile />
            </TabPanel>

            {/* index 6 */}
            <TabPanel value={value} index={5}>
              <HealthProfile />
            </TabPanel>

            {/* index 7 */}
            <TabPanel value={value} index={6}>
              <LearningProfile />
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
