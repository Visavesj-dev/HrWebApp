import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//import components
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import Directory from "./components/pages/Directory/Directory";
import EmployeeProfile from "./components/pages/EmployeeProfile/EmployeeProfile";
import AddEmployee from "./components/pages/AddEmployee/AddEmployee";
import Quiz from "./components/pages/Quiz/Quiz";
import Create from "./components/pages/Quiz/pages/create"
import Host from "./components/pages/Quiz/pages/host";
import Play from "./components/pages/Quiz/pages/play";

//import materails
import { Container } from "@material-ui/core";

//import styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: 0,
  },
}));

export default function App() {
  const classes = useStyles();

  // Drawer movement
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //----*----//

  return (
    <Router>
      <div className={classes.root}>
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Menu open={open} />
        <Container className={classes.content} maxWidth={false}>
          <Switch>
          <Route path="/directory" component={Directory} />
          <Route path="/profile/:id" component={EmployeeProfile}/>
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/quiz" component={Quiz}/>
          <Route path="/create"  component={Create} />
          <Route path="/host" component={Host} />
          <Route path="/play" component={Play} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
