import React from "react";
import { withRouter } from "react-router-dom"; //ไม่ได้อยู่ภายใต้ Route เพื่อใช้ History

//import materials
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//import styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "rgb(255, 87, 69)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const Header = (props) => {

  const { data } = props.history.location.pathname
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={
              props.open === false
                ? props.handleDrawerOpen
                : props.handleDrawerClose
            }
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                Human Capital Management |  
          </Typography>
          <Button variant="contained" >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
