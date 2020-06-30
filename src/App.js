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
import TeamDirectory from "./components/pages/teamdirectory/teamdirectory"
import ViewTeamDirectory from "./components/pages/viewTeamDirectory/viewTeamDirectory"
import document from "./components/pages/documents/document"
import jobtask from './components/pages/jobtask/jobtask'
import task from './components/pages/jobtask/addsuggestion'
import addtask from './components/pages/jobtask/addtask'
import taskAdmin from './components/pages/jobtask/task_admin'
import taskView from './components/pages/jobtask/task_view'
import organization_chart from "./components/pages/organization_chart/organization_chart";
import Certificate from './components/pages/certificate/certificate'
import ViewCertificate from './components/pages/viewCertificate/viewCertificate'
import Directory from "./components/pages/Directory/Directory";
import EmployeeProfile from "./components/pages/EmployeeProfile/EmployeeProfile";
import AddEmployee from "./components/pages/AddEmployee/AddEmployee";

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
    marginTop:50,
    marginLeft:30,
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
      <div className={classes.root} >
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Menu open={open} />
        <Container className={classes.content} maxWidth={false}>
          <Switch>
          <Route path="/teamdirectory" component={TeamDirectory} />
          <Route path='/viewteamdirectory' component={ViewTeamDirectory}/>
      <Route path="/documents" component={document}/>
          <Route path="/jobtask" component={jobtask}/>
          <Route path="/addsuggestion/" component={task}/>
          <Route path="/addtask/" component={addtask}/>
          <Route path="/task" component={taskAdmin}/>
          <Route path="/taskv" component={taskView}/>
            <Route path="/organization_chart" component={organization_chart} />
            <Route path="/certificate" component={Certificate} />
            <Route path="/viewCertificate" component={ViewCertificate} />
          <Route path="/directory" component={Directory} />
          <Route path="/profile/:id" component={EmployeeProfile}/>
          <Route path="/addEmployee" component={AddEmployee} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
