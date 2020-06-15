import React from "react";
import { NavLink } from "react-router-dom";

//import materials
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PollIcon from '@material-ui/icons/Poll';
import { Layers as LayersIcon } from "@material-ui/icons";

//import styles
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage:
      "url(" + `${process.env.PUBLIC_URL}/images/background_menu.jpg` + ")",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  isActive: {
    backgroundColor: "#e0f5fd",
    color: "#0080ff",
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerPaper]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <List>
        {/* Directory */}
        <ListItem
          component={NavLink}
          to="/directory"
          button
          key="Directory"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Directory" />
        </ListItem>

        {/* Quiz */}
        <ListItem
          component={NavLink}
          to="/quiz"
          button
          key="Quiz"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            <PollIcon />
          </ListItemIcon>
          <ListItemText primary="Quiz" />
        </ListItem>
      </List>
    </Drawer>
  );
}
