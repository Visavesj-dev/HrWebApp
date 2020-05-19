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

//import styles
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Layers as LayersIcon,
  BarChart as BarChartIcon,
  Person as PersonIcon,
} from "@material-ui/icons";
const charticon = <svg id="Layer_5" enable-background="new 0 0 64 64" height="24" viewBox="0 0 64 64" width="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m23 5h10v2h-10z"/><path d="m23 9h10v2h-10z"/><path d="m27 13h2v2h-2z"/><path d="m23 13h2v2h-2z"/><path d="m31 13h2v2h-2z"/><path d="m38.121 36.293 3.293-3.293h15.193c2.443 0 4.491-1.832 4.762-4.261l1.602-14.418c.019-.176.029-.354.029-.531 0-2.641-2.148-4.79-4.79-4.79h-21.537l.298-2.68c.019-.175.029-.353.029-.53 0-2.641-2.148-4.79-4.79-4.79h-26.42c-2.642 0-4.79 2.149-4.79 4.79 0 .177.01.354.029.529l1.602 14.42c.27 2.429 2.318 4.261 4.762 4.261h9.607v8h-4v-4h-12v10h12v-4h4v10h-4v-4h-12v10h12v-4h4v10h-4v-4h-12v10h12v-4h6v-12h11v3h5v4h-5v8h12v-3h8v3h12v-8h-5v-4h5v-8h-12v3h-8v-3h-5v-5.082c.42-.107.813-.316 1.121-.625zm-27.121.707h-8v-6h8zm0 12h-8v-6h8zm0 12h-8v-6h8zm36-43c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm9 13h-12v-2c0-3.309 2.691-6 6-6s6 2.691 6 6zm-19.549-20h21.759c1.538 0 2.79 1.251 2.79 2.79 0 .102-.006.205-.018.308l-1.602 14.419c-.101.912-.635 1.674-1.381 2.104v-1.621c0-3.232-1.93-6.016-4.695-7.277 1.032-.917 1.696-2.238 1.696-3.723 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.485.664 2.806 1.695 3.723-2.765 1.261-4.695 4.045-4.695 7.277v2h-1.414l-3.879 3.879c-.238.239-.707.045-.707-.293v-3.586h-2.607c-1.424 0-2.616-1.067-2.773-2.482l-.391-3.518h.379c2.443 0 4.491-1.832 4.762-4.261zm-31.832 9.518-1.601-14.421c-.012-.102-.018-.205-.018-.307 0-1.539 1.252-2.79 2.79-2.79h26.42c1.538 0 2.79 1.251 2.79 2.79 0 .102-.006.205-.018.308l-1.602 14.419c-.156 1.416-1.349 2.483-2.773 2.483h-4.607v3.586c0 .338-.47.531-.707.293l-3.293-3.293v-2.586c0-3.232-1.93-6.016-4.695-7.277 1.031-.917 1.695-2.238 1.695-3.723 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.485.664 2.806 1.695 3.723-2.765 1.261-4.695 4.045-4.695 7.277v1.622c-.746-.43-1.28-1.193-1.381-2.104zm6.381-10.518c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm9 13h-12v-2c0-3.309 2.691-6 6-6s6 2.691 6 6zm20 37h-8v-4h8zm20 0h-8v-4h8zm-8-16h8v4h-8zm-2 3v3h5v4h-5v3h-8v-3h-5v-4h5v-3zm-10 1h-8v-4h8zm-10-6v3h-11v-20h1.586l3.292 3.292c.449.45 1.071.708 1.708.708 1.331 0 2.414-1.083 2.414-2.414v-1.586h.216l.415 3.739c.27 2.429 2.318 4.261 4.762 4.261h.607v1.586c0 .802.397 1.508 1 1.947v5.467z"/><path d="m5 57h4v2h-4z"/><path d="m5 45h4v2h-4z"/><path d="m5 33h4v2h-4z"/></g></svg>
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

        <ListItem
          component={NavLink}
          to="/organization_chart"
          button
          key="Chart"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {charticon}
          </ListItemIcon>
          <ListItemText primary="Organization Chart" />
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
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Documents" />
        </ListItem>
      </List>
    </Drawer>
  );
}
