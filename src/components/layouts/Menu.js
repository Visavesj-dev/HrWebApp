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
const certificateIcon = <svg id="Capa_1" enable-background="new 0 0 512 512" height="32" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_2590_"><g id="XMLID_212_"><path id="XMLID_215_" d="m460.459 441.32-86.206-149.314c31.891-30.919 51.747-74.184 51.747-122.006 0-93.738-76.261-170-170-170s-170 76.262-170 170c0 47.822 19.856 91.087 51.748 122.007l-86.207 149.313c-2.023 3.505-1.735 7.884.731 11.093 2.465 3.208 6.622 4.614 10.531 3.563l66.454-17.904 17.722 66.503c1.042 3.911 4.338 6.808 8.351 7.339.44.058.879.087 1.315.087 3.538 0 6.855-1.88 8.657-5l90.698-157.095 90.698 157.094c1.802 3.121 5.12 5 8.657 5 .436 0 .875-.029 1.315-.087 4.012-.531 7.309-3.428 8.351-7.339l17.722-66.503 66.455 17.904c3.91 1.054 8.065-.354 10.531-3.563 2.466-3.208 2.754-7.587.73-11.092zm-354.459-271.32c0-82.71 67.29-150 150-150s150 67.29 150 150-67.29 150-150 150-150-67.29-150-150zm54.076 306.052-14.075-52.819c-.684-2.567-2.362-4.757-4.663-6.085-2.301-1.329-5.035-1.687-7.602-.996l-52.78 14.22 72.221-125.089c24.355 18.556 53.844 30.7 85.933 33.88zm218.188-59.901c-2.567-.691-5.301-.333-7.602.996s-3.979 3.518-4.663 6.085l-14.075 52.819-79.034-136.89c32.089-3.18 61.578-15.324 85.933-33.88l72.22 125.09z"/><path id="XMLID_885_" d="m193.352 149.609c-2.131 6.565-.384 13.635 4.56 18.451l15.992 15.581-3.769 22.006c-1.165 6.803 1.581 13.548 7.166 17.604 3.155 2.291 6.844 3.454 10.559 3.454 2.862 0 5.739-.691 8.397-2.089l19.759-10.395 19.765 10.384c6.11 3.21 13.374 2.684 18.956-1.375 5.583-4.058 8.325-10.805 7.156-17.607l-3.78-22.005 15.984-15.589c4.941-4.819 6.684-11.89 4.55-18.453-2.135-6.563-7.704-11.256-14.534-12.247l-22.096-3.205-9.886-20.019c-3.056-6.188-9.239-10.03-16.139-10.03-.001 0-.003 0-.005 0-6.901.002-13.085 3.848-16.139 10.038l-9.875 20.024-22.094 3.217c-6.829.996-12.396 5.691-14.527 12.255zm44.706 3.563c3.257-.474 6.072-2.521 7.528-5.472l10.408-21.104 10.42 21.099c1.458 2.951 4.274 4.996 7.531 5.468l23.289 3.378-16.846 16.43c-2.356 2.298-3.431 5.608-2.874 8.852l3.984 23.192-20.832-10.945c-2.913-1.531-6.394-1.53-9.307.002l-20.826 10.956 3.972-23.194c.556-3.244-.521-6.554-2.878-8.851l-16.855-16.421z"/><path id="XMLID_887_" d="m256 296c69.477 0 126-56.523 126-126 0-51.209-30.58-96.935-77.906-116.493-5.108-2.112-10.953.318-13.061 5.422-2.109 5.104.318 10.952 5.422 13.061 39.817 16.455 65.545 54.927 65.545 98.01 0 58.449-47.551 106-106 106s-106-47.551-106-106c0-43.186 25.812-81.692 65.759-98.098 5.109-2.098 7.55-7.941 5.452-13.049-2.099-5.109-7.94-7.549-13.049-5.452-47.482 19.501-78.162 65.268-78.162 116.599 0 69.477 56.524 126 126 126z"/><path id="XMLID_888_" d="m256.13 64c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93c-1.87 1.86-2.93 4.44-2.93 7.07s1.06 5.21 2.93 7.07c1.86 1.86 4.44 2.93 7.07 2.93z"/></g></g></svg>

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

        <ListItem
          component={NavLink}
          to="/certificate"
          button
          key="Certificate"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {certificateIcon}
          </ListItemIcon>
          <ListItemText primary="Certificate" />
        </ListItem>
        
        <ListItem
          component={NavLink}
          to="/viewCertificate"
          button
          key="viewCertificate"
          activeClassName={classes.isActive}
        >
          <ListItemIcon>
            {certificateIcon}
          </ListItemIcon>
          <ListItemText primary="viewCertificate" />
        </ListItem>
      </List>
    </Drawer>
  );
}
