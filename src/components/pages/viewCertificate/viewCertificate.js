import React, { useState } from "react";

//import modules
import mockData from "./data";
import UsersTable from "./components/UserTable";

//import material
import Grid from "@material-ui/core/Grid";
//import styles
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    width: "95%",
  },
  content: {
    marginTop: theme.spacing(0),
  },
}));

export default function ViewCertificate() {
  const classes = useStyles();
  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          {/* <UsersToolbar /> */}
          <div className={classes.content}>
            <UsersTable users={users} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
