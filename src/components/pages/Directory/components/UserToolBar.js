import React from "react";

//import modules


//import tools
import PropTypes from "prop-types";

//import material
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//import styles
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  row1: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  row2: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const UsersToolbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <div className={classes.row2}>
            <span className={classes.spacer} />
            <Button color="primary" variant="contained">
              Add Employee
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string,
};

export default UsersToolbar;
