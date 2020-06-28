
import React, { useState, useEffect, useReducer } from "react";

//import modules
import getInitials from "../modules/getInitials";


//import material
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Input,
  Paper,
  Link,
  Button,
  CircularProgress,
  Modal,
} from "@material-ui/core";
// import MaterialTable from 'material-table';
import { Document, Page } from 'react-pdf';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import SearchIcon from "@material-ui/icons/Search";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import { withRouter } from "react-router-dom";
import PDFViewer from 'pdf-viewer-reactjs'
//import Tools
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";

//Icon
import DescriptionIcon from '@material-ui/icons/Description';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
//import styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { fieldToInputBase } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
    overflowX: "auto",
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: "flex-end",
  },
  row1: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2.6),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
  rootSearch: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "auto",
    overflowX: "scroll",
  },
  headerText: {
    textAlign: "left",
    color: "#212121",
  },
  formControl: {
    margin: theme.spacing(1),
  },
  colorText: {
    color: "#212121",
    textAlign: "center",
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
  modal: {
    "max-height": "calc(100vh - 210px)",
    "overflow-y": "auto",
  },
  papermodal: {
    "max-height": "calc(100vh - 210px)",
    "overflow-y": "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const JobtaskTable = (props) => {
  const { className, users,...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
  const [searchTerm, setSearchTerm] = React.useState(""); //searching
  //the state use for filter
  const [state, setState] = React.useState({
    Avaliable:false,
    LastYear:false,
    Expired:false,
    Law:false,
    Policy:false,
    Competency:false,
  });
  // const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    Avaliable,
    LastYear,
    Expired,
    Law,
    Policy,
    Competency,
  } = state;

  //searching
  useEffect(() => {
    setPosts(users);
  }, []);

  const currentPosts = posts.slice(
    // ทำให้ข้อมูลเป็นหน้าปัจจุบัน
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const results = !searchTerm
    ? currentPosts
    : currentPosts.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          person.phone.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          person.type.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
      });

  const handlePageChange = (event, page) => {
    setPage(page); // เปลี่ยนหน้า table
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value); // handle search
  };

  const clear = () => {
    //function clear value
    setSearchTerm("");
  };

  const routeChange = (path) => {
    props.history.push(path);
  };

  function Eachrow(props) {
    const cer = props.eachuser;
    let expireDate = Date()
    expireDate = Date.parse(cer.expireDate)
    var today = new Date();
    let isExpire = 'Expired'
    if(expireDate>today){isExpire = (expireDate-today)/ (1000 * 60 * 60 * 24)}
    if(isExpire!='Expired'){isExpire = Math.round(isExpire)}
    let imp =''
    if(cer.impactLaw){imp=imp+'Law '}
    if(cer.impactPolicy){imp=imp+'Policy '}
    if(cer.impactCompetency){imp=imp+'Competency '}
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        <TableRow>
          <TableCell
            onClick={() => {
              routeChange("/profile/");
            }}
          >
            {cer.certificateName}
          </TableCell>

          <TableCell align='center'>
            {cer.issueBy}
          </TableCell>
          <TableCell align='center'>
            {cer.issueDate}
          </TableCell>
          <TableCell align='center'>
            {cer.expireDate} 
          </TableCell>
          <TableCell align='center'>
          {isExpire}
          </TableCell>
          <TableCell align='center'>
            {imp}
          </TableCell>
          <TableCell align='center' onClick={() => handleOpen()}>
            <DescriptionIcon/>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  const [modalOpen,setModalOpen] =useState(false)
  const handleOpen=()=>{
    setModalOpen(true)
  }
  const handleClose=()=>{
    setModalOpen(false)
  }
  function ModalContent(){
    // let link = {{url:"http://www.africau.edu/images/default/sample.pdf"}}
    return   <PDFViewer
    document={{
        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
    }}
/>
  }

  return (
    <div>
      <Modal
          open={modalOpen}
          align='center'
          width={'80%'}
          onClose={handleClose}
          // setAppElement={'#root'}
          maxMediaWidth={1024}
        >
          {ModalContent()}
        </Modal>
      <Grid container spacing={3}>
        {/* left tab for filtering*/}
        <Grid item xs={3} md={2}>
          <div>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.colorText}
              >
                Infomation Filter
              </Typography>
              <Divider />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Status
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={Avaliable}
                        onChange={handleChange}
                        name="Avaliable"
                      />
                    }
                    label="Avaliable"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={LastYear}
                        onChange={handleChange}
                        name="LastYear"
                      />
                    }
                    label="Last Year Active"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={Expired}
                        onChange={handleChange}
                        name="Expired"
                      />
                    }
                    label="Expired"
                  />
                </FormGroup>
              </FormControl>
              <Divider />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Filter By Impact
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Law}
                        onChange={handleChange}
                        name="Law"
                      />
                    }
                    label="Law"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Policy}
                        onChange={handleChange}
                        name="Policy"
                      />
                    }
                    label="Company Policy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Competency}
                        onChange={handleChange}
                        name="Competency"
                      />
                    }
                    label="Competency"
                  />
                </FormGroup>
              </FormControl>
              <Divider />
              <center>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => clear()} //Clear value
                  disableElevation
                >
                  Clear Information
                </Button>
              </center>
            </Paper>
          </div>
        </Grid>

        {/* Table */}
        <Grid item xs={9} md={10}>
          {/*Top of the table searching and adding button */}
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <div className={classes.row2}>
                <h1>User Certificate  </h1>
              </div>
              <div className={classes.row2}>
              <h3> you got {users.length} certificate(s).</h3>
              </div>
              {/* Searching */}
              <div className={classes.row1}>
                <Paper className={classes.rootSearch}>
                  <SearchIcon className={classes.icon} />
                  <Input
                    className={classes.input}
                    disableUnderline
                    type="text"
                    placeholder="Search user"
                    onChange={handleChangeSearch}
                    // value={searchTerm}
                  />
                </Paper>
              </div>
            </Grid>

            {/* ---Button ____ */}
            {/* <Grid item xs={3} md={3}>
            </Grid>
            <Grid item xs={3} md={3}>
            </Grid> */}
            {/* ------------- */}
          </Grid>

          <Card className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <div className={classes.inner}>
                  <Table style={{ overflowX: "scroll" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Certificate</TableCell>
                        <TableCell align='center'>Issue By</TableCell>
                        <TableCell align='center'>Issue Date</TableCell>
                        <TableCell align='center'>Expire Date</TableCell>
                        <TableCell align='center'>อายุ(วัน)</TableCell>
                        <TableCell align='center'>Impact</TableCell>
                        <TableCell align='center'>Attach File</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {results.filter((item) => {
                          let IsReturnImpact = false
                          let IsReturnStatus = false
                          if(Law&&item.impactLaw){IsReturnImpact=true}
                          if(Policy&&item.impactPolicy){IsReturnImpact=true}
                          if(Competency&item.impactCompetency){IsReturnImpact=true}
                          if(!Law&&!Policy&&!Competency){IsReturnImpact=true}
                          
                          if(Avaliable){
                            let expireDate = Date.parse(item.expireDate)
                            var today = new Date();
                            if(expireDate>today){IsReturnStatus=true}
                          }
                          if(LastYear){
                            let expireDate = Date.parse(item.expireDate)
                            var today = new Date();
                            if((expireDate-today)/ (1000 * 60 * 60 * 24)<365&&(expireDate-today)/ (1000 * 60 * 60 * 24)>0){IsReturnStatus=true}
                          }
                          if(Expired){
                            let expireDate = Date.parse(item.expireDate)
                            var today = new Date();
                            if(expireDate<today){IsReturnStatus=true}
                          }
                          if(!Avaliable&&!LastYear&&!Expired){IsReturnStatus=true}
                          if(IsReturnImpact&&IsReturnStatus){
                            return item
                          }
                        })
                        .map((user) => (
                          <React.Fragment>
                            <Eachrow eachuser={user} />
                          </React.Fragment>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
              <TablePagination
                component="div"
                count={posts.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
                backIconButtonProps={{
                  "aria-label": "Previous Page",
                }}
                nextIconButtonProps={{
                  "aria-label": "Next Page",
                }}
              />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

JobtaskTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(JobtaskTable);
