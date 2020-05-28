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
import document from "./components/pages/document/document"
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
  const [open, setOpen] = React.useState(true);
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
          <Route path="/documents" component={document} />
        </Container>
      </div>
    </Router>
  );
}
