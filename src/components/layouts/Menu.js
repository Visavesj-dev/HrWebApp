import React from "react";
import { NavLink } from "react-router-dom";

//import materials
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
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
