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
  Container,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

//import tools
import BasicInfo from "./compoments/BasicInfo";
import EmploymentType from "./compoments/EmploymentType";
import JobDetails from "./compoments/JobDetails";
import EducationDestails from "./compoments/EducationDetails";
import OfferDetails from "./compoments/OfferDetails";
import HealthBenefits from "./compoments/HealthBenefits";
import PayrollDetails from "./compoments/PayrollDetails";

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
    marginTop: 25,
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
        <div>
          <Typography>{children}</Typography>
          </div>
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

//สำหรับใส่ชื่อ Step
function getSteps() {
  return ["Information", "Account"];
}

function AddEmployee(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //สำหรับ get Step ตาม index
  // function getStepContent(stepIndex) {
  //   switch (stepIndex) {
  //     case 0:
  //       return (
  //         <TabPanel value={value} index={0}>

  //           <BasicInfo />
  //         </TabPanel>
  //       );
  //     case 1:
  //       return (
  //         <TabPanel value={value} index={1}>
  //           <BasicInfo />
  //         </TabPanel>
  //       )
  //     default:
  //       return "Unknown stepIndex";
  //   }
  // }

  // For Taps
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //-----*-----//

  // change Profile Name
  const [profile , setProfile] = React.useState({
    firstName: "",
    lastName: ""
  })

  const handleChangeName = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value});
  }

  const {firstName , lastName} = profile;

  return (
    <div className={classes.root}>
      <Container>
        {/* Left Side */}
        <Grid container spacing={1}>
          <Grid item md={5} xs={12}>
            <Card style={{ width: "85%", marginTop: 25 }}>
              <CardContent>
                <div className={classes.details}>
                  <Avatar className={classes.avatar} />
                  <div style={{ margin: "auto" }}>
                    <Typography gutterBottom variant="h6">
                       {firstName} {lastName}
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
                    <Tab label="Basic Info" {...a11yProps(0)} />
                    <Tab label="Employment Type" {...a11yProps(1)} />
                    <Tab label="Job Details" {...a11yProps(2)} />
                    <Tab label="Payroll Details" {...a11yProps(3)} />
                    <Tab label="Education Details" {...a11yProps(4)} />
                    <Tab label="Offer Details" {...a11yProps(5)} />
                    <Tab label="Health Benefits" {...a11yProps(6)} />
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </Grid>

          {/* Right Side  */}

          <Grid item md={7} xs={12}>
           {/* Basic Info */}
            <TabPanel value={value} index={0}>
              <BasicInfo handleChangeName={handleChangeName} profile={profile} />
            </TabPanel>
            {/* Employment Type */}
            <TabPanel value={value} index={1}>
              <EmploymentType />
            </TabPanel>
             {/* Job */}
             <TabPanel value={value} index={2}>
              <JobDetails />
            </TabPanel>
             {/* Payroll */}
            <TabPanel value={value} index={3}>
              <PayrollDetails />
            </TabPanel>
             {/* Education */}
            <TabPanel value={value} index={4}>
              <EducationDestails />
            </TabPanel>
             {/* Offer */}
            <TabPanel value={value} index={5}>
              <OfferDetails />
            </TabPanel> 
             {/* Health */}
            <TabPanel value={value} index={6}>
              <HealthBenefits />
            </TabPanel> 
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AddEmployee;
