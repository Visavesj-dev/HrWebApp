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
  TextField
} from "@material-ui/core";

//import tools
import moment from "moment";


//import style
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: 75
  },
  //prifile
  profile: {
    marginBottom: 20
  },
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    margin: "auto"
  },
}));

function AddEmployee(props) {
  const classes = useStyles();
  const [data, setData] = useState([])
  // const [users] = useState(mockData);
  
  React.useEffect(() => {
   console.log(props.match.params.id)
  }, [])

  const user = {
    name: "Shen Zhi",
    city: "Los Angeles",
    country: "USA",
    timezone: "GTM-7",
    avatar: "/images/avatars/avatar_11.png",
  };

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item  md={4}  xs={12}>
          <Card>
            <CardContent>
              <div className={classes.details}>
                <div>
                  <Typography gutterBottom variant="h2">
                    ........
                  </Typography>
                  <Typography
                    className={classes.locationText}
                    color="textSecondary"
                    variant="body1"
                  >
                    {user.city}, {user.country}
                  </Typography>
                  <Typography
                    className={classes.dateText}
                    color="textSecondary"
                    variant="body1"
                  >
                    {moment().format("hh:mm A")} ({user.timezone})
                  </Typography>
                </div>
                <Avatar className={classes.avatar}  />
              </div>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                className={classes.uploadButton}
                color="primary"
                variant="text"
              >
                Upload picture
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item  md={8}  xs={12}>

        {/* Right Side  */}
        <Card className={classes.profile}>
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          title="Basic Info"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
          <Grid
              item
              md={6}
              xs={12}
            >
            <Typography variant="h6" >
                  Frist Name
             </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Frist Name"
                margin="dense"
                name="fullname"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography variant="h6">
                  Last Name
             </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Gender"
                margin="dense"
                name="Gender"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography variant="h6">
                  Email Address
             </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
             <TextField
                fullWidth
                label="Date of Birth"
                margin="dense"
                name="DOB"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography variant="h6">
            Confirm Email
             </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Id Number"
                margin="dense"
                name="idnumber"
                onChange={handleChange}
                value={values.phone}
                required
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        {/* <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </CardActions> */}
      </form>
    </Card>
    </Grid>
</Grid>
    </div>
  );
}

export default AddEmployee;
