import React from "react";
import { NavLink } from "react-router-dom";

//import materials
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//import styles
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Layers as LayersIcon,
  BarChart as BarChartIcon,
  Person as PersonIcon,
} from "@material-ui/icons";
function taskIcon(){return <svg height="30" viewBox="0 0 64 64" width="30" xmlns="http://www.w3.org/2000/svg"><g id="_21-Check_list" data-name="21-Check list"><path d="m53 64h-42a5.006 5.006 0 0 1 -5-5v-54a5.006 5.006 0 0 1 5-5h42a5.006 5.006 0 0 1 5 5v6h-2v-6a3 3 0 0 0 -3-3h-42a3 3 0 0 0 -3 3v54a3 3 0 0 0 3 3h42a3 3 0 0 0 3-3v-20h2v20a5.006 5.006 0 0 1 -5 5z"/><path d="m56 35h2v2h-2z"/><path d="m53 56h-8v-2h8v-15h2v15a2 2 0 0 1 -2 2z"/><path d="m53 13h2v2h-2z"/><path d="m39 56h-28a2 2 0 0 1 -2-2v-49a2 2 0 0 1 2-2h42a2 2 0 0 1 2 2v6h-2v-6h-42v49h28z"/><path d="m44.95 52.363a1 1 0 0 1 -.416-.091l-3.648-1.672a1 1 0 0 1 -.487-1.338l17.861-37.552a3.034 3.034 0 0 1 3.993-1.434 2.965 2.965 0 0 1 1.569 1.693 2.916 2.916 0 0 1 -.108 2.268l-17.861 37.556a1 1 0 0 1 -.903.57zm-2.309-3.155 1.829.836 17.438-36.666a.939.939 0 0 0 .035-.726.979.979 0 0 0 -.521-.557 1.027 1.027 0 0 0 -1.356.474z"/><path d="m41 56a1 1 0 0 1 -1-1.057l.3-5.3 2 .113-.162 2.841 2.134-1.965 1.355 1.468-3.95 3.636a1 1 0 0 1 -.677.264z"/><path d="m32 62a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z"/><path d="m22 15h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 7h20v2h-20z"/><path d="m28 10h20v2h-20z"/><path d="m28 13h20v2h-20z"/><path d="m22 27h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 19h20v2h-20z"/><path d="m28 22h20v2h-20z"/><path d="m28 25h20v2h-20z"/><path d="m22 39h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 31h11v2h-11z"/><path d="m28 34h11v2h-11z"/><path d="m28 37h11v2h-11z"/><path d="m22 51h-6a1 1 0 0 1 -1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1zm-5-2h4v-4h-4z"/><path d="m28 43h11v2h-11z"/><path d="m28 46h11v2h-11z"/><path d="m28 49h11v2h-11z"/><path d="m14.343 9h11.314v2h-11.314z" transform="matrix(.707 -.707 .707 .707 -1.213 17.071)"/><path d="m14.343 21h11.314v2h-11.314z" transform="matrix(.707 -.707 .707 .707 -9.698 20.586)"/></g></svg>}
function documentIcon(){return <svg id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m507.786 64.62c-.304-.286-60.445-57.641-60.445-57.641-2.299-2.206-4.677-4.486-9.117-4.486h-242.12c-7.072 0-12.826 5.753-12.826 12.825v39.383l-85.335 14.628c-6.84 1.2-11.44 7.746-10.255 14.579l4.331 25.252c-27.737 9.334-56.214 18.956-83.705 28.831-6.496 2.375-9.905 9.598-7.587 16.133l54.685 152.016c1.1 3.059 3.983 4.964 7.058 4.964.842 0 1.7-.143 2.538-.445 3.898-1.402 5.921-5.698 4.519-9.596l-53.876-149.768c25.9-9.273 52.722-18.349 78.935-27.172l25.771 150.245 29.654 173.032c1.071 6.108 6.44 10.454 12.5 10.454.686 0 1.382-.056 2.08-.171l80.316-13.783 62.76-10.758-94.391 33.927-74.435 26.763-57.808-160.789c-1.401-3.898-5.696-5.921-9.595-4.52-3.898 1.401-5.921 5.697-4.52 9.595l58.628 163.074c1.875 5.128 6.733 8.316 11.868 8.316 1.419 0 2.86-.244 4.264-.757l76.671-27.566 174.094-62.574 33.259-5.701h73.471c7.072 0 12.826-5.766 12.826-12.854v-326.985c.001-4.489-2.435-6.779-4.213-8.451zm-19.871 1.776h-37.53l-.93.004c-1.797.012-6.004.043-7.071-1.017-.246-.245-.534-1.063-.534-2.582l-.087-40.415zm9.085 331.512h-298.722v-146.167c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v148.313c0 7.087 5.754 12.854 12.826 12.854h140.812l-94.545 16.206-77.982 13.383-29.248-170.665-32.269-188.13 80.405-13.783v147.022c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-199.449h228.475l.098 45.326c0 5.494 1.671 9.938 4.966 13.21 5.063 5.027 12.22 5.377 16.663 5.377.382 0 .744-.003 1.083-.005l47.438-.003z"/><path d="m234.43 118.949c0 4.142 3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-214.436c-4.142 0-7.5 3.358-7.5 7.5z"/><path d="m456.366 164.731h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.366 218.013h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.366 271.295h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.366 324.578h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/></g></svg>}
const drawerWidth = 240;
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
      width: theme.spacing(9) + 1,
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
  const theme = useTheme();

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
      <div className={classes.toolbar}>
        <IconButton onClick={props.handleDrawerClose}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_white.png`}
            height="30"
          />
          <ChevronLeftIcon style={{ color: "white" }} />
        </IconButton>
      </div>

      <Divider />
      <List>
        {/* Stock */}
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

        {/* AboutUS */}
        <ListItem
          component={NavLink}
          to="/documents"
          button
          key="Documents"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {documentIcon()}
          </ListItemIcon>
          <ListItemText primary="Documents" />
        </ListItem>
        <ListItem
          component={NavLink}
          to="/jobtask"
          button
          key="Jobtask"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {taskIcon()}
          </ListItemIcon>
          <ListItemText primary="Job Tasks" />
        </ListItem>
      </List>
    </Drawer>
  );
}
