import React, { useState, useEffect ,useReducer } from "react";

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
} from "@material-ui/core";
// import MaterialTable from 'material-table';
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import { withRouter } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//import Tools
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import moment from "moment";

//Icon
import EmailIcon from '@material-ui/icons/Email';
import BackupIcon from '@material-ui/icons/Backup';
//import styles
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";


//SVGIcon
function NoDocIcon(){return <svg height="32pt" viewBox="0 0 512 512" width="32pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>}
function DocIcon(){return <svg height="32pt" viewBox="0 0 512 512" width="32pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/></svg>}

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
    height: 525,
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  papermodal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UsersTable = (props) => {
  const { className, users, ...rest } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10); //posts per page
  const [page, setPage] = useState(0); // current page
  const [posts, setPosts] = useState([]); //เก็บข้อมูล array
const [searchTerm, setSearchTerm] = React.useState(""); //searching

 //test
// const [test,setTest] = useState("")
// const [test2,setTest2] = useState("")

//   const handleChange = (event) => {
//     setTest(event.target.value)
//   };

//   const handleChange1 = (event) => {
//     setTest2(event.target.value)
//   };

const [state, setState] = React.useState({
    FullTime: false,
    PartTime: false,
    Active: false,
    Terminated: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { FullTime, PartTime, Active , Terminated} = state;

  //---*---//


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
    setPage(page);// เปลี่ยนหน้า table
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value); // handle search
  };

  const clear = () => { //function clear value
    setSearchTerm("");
  };


  const [show,setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = (user,file) => {
    setUserTemp(user)
    setFileTemp(file)
    setShow(true);
  }
  const [userTemp,setUserTemp]=useState(false)
  const [fileTemp,setFileTemp]=useState(false)
  const [modalHeader,setModalHeader] = useState('')
  const [modalContent,setModalContent] = useState('')

  const tableColumn = {
    columns: [
      { title: "Offer", value: "document1" },
      { title: "employment eligibility", value: "document2" },
      { title: "Tax document", value: "document3" },
      { title: "background check", value: "document4" },

    ]
  }
  // const [stage2, setState2] = React.useState({
  //   columns: [
    // { title: "Offer", value: "document1" },
    // { title: "employment eligibility", value: "document2" },
    // { title: "Tax document", value: "document3" },
    // { title: "background check", value: "document4" },
  //   ],
  //   data: [
  //     },
  //   ],
  // });

  const filetable = [
      {
        id:1,
        file:[
        {title:'document1',fileurl:'ad'},
        {title:'document2',fileurl:''},
        {title:'document3',fileurl:'sdf'},
        {title:'document4',fileurl:''},
        {title:'document5',fileurl:'sdv'},
        ]
      },
      {
        id:2,
        file:[
        {title:'document1',fileurl:'a'},
        {title:'document2',fileurl:'a'},
        {title:'document3',fileurl:'sdf'},
        {title:'document4',fileurl:'a'},
        {title:'document5',fileurl:'sdv'},
        ]
      }
  ]
  
  function fileLogo(user,file){
    for (let i = 0; i < filetable.length; i++){
      if(user.id==filetable[i].id){
          for(let j=0; j<filetable[i].file.length;j++){
            console.log(filetable[i].file[j].title+' and '+file.title)
            if(filetable[i].file[j].title==file.value){
              if(filetable[i].file[j].fileurl!=''){
                return DocIcon()
              }
            }
          }
      }
    }
    return NoDocIcon()
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={classes.papermodal}>
          <div className={classes.nameContainer}>
          <Avatar
            className={classes.avatar}
            src={userTemp.avatarUrl}
          >
            {getInitials(userTemp.name)}
          </Avatar>
          <h2 id="transition-modal-title">{userTemp.name+" - "+fileTemp.title}</h2>
          </div>
            <p id="transition-modal-description"><BackupIcon/><input type="file" name="file" /></p>
          </div>
          {/* <MaterialTable
            title="Editable Example"
            columns={state2.columns}
            data={state2.data}/> */}
        </Fade>
      </Modal>

      <Grid container spacing={3}>
        <Grid item xs={3} md={2}>
          <div>
          {console.log(Active)}
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
                  Type
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={FullTime} 
                        onChange={handleChange} 
                        name="FullTime"
                      />
                    }
                    label="Full Time"
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={PartTime} 
                        onChange={handleChange} 
                        name="PartTime"
                      />
                    }
                    label="Part Time"
                  />
                  
                </FormGroup>
              </FormControl>
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
                        checked={Active}
                        onChange={handleChange}
                        name="Active"
                      />
                    }
                    label="Active"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                         checked={Terminated}
                        onChange={handleChange}
                        name="Terminated"
                      />
                    }
                    label="Terminated"
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
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
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
            <Grid item xs={6} md={6}>
              <div className={classes.row2}>
                <span className={classes.spacer} />
                {/* <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    props.history.push("/addEmployee");
                  }}
                >
                  Add Employee
                </Button> */}
              </div>
            </Grid>
            {/* ------------- */}
          </Grid>

          <Card className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <div className={classes.inner}>
                  <Table style={{ overflowX: "scroll" }}>
                    <TableHead>
                      <TableRow>
                      <TableCell>Name</TableCell>
                      {tableColumn.columns.map(item=>
                        <TableCell>{item.title}</TableCell>
                      )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Set user data here */}
                      {results.filter((item)=> {
                          if(FullTime == false && PartTime == false && Active == false && Terminated == false){
                              return item
                          }else if(FullTime == true && PartTime == false && Active == false && Terminated == false){
                              return item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == false && Terminated == false){
                              return item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == false && Terminated == false){
                              return item
                          }else if(FullTime == false && PartTime == false && Active == true && Terminated == false){
                              return item.status == "Active"
                          }else if(FullTime == true && PartTime == false && Active == true && Terminated == false){
                              return item.status == "Active" && item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == true && Terminated == false){
                              return item.status == "Active" && item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == true && Terminated == false){
                              return item.status == "Active"
                          }else if(FullTime == false && PartTime == false && Active == false && Terminated == true){
                              return item.status == "Terminated"
                          }else if(FullTime == true && PartTime == false && Active == false && Terminated == true){
                              return item.status == "Terminated" && item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == false && Terminated == true){
                              return item.status == "Terminated" && item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == false && Terminated == true){
                              return item.status == "Terminated"
                          }else if(FullTime == true && PartTime == false && Active == true && Terminated == true){
                              return item.type == "Full Time"
                          }else if(FullTime == false && PartTime == true && Active == true && Terminated == true){
                              return item.type == "Part Time"
                          }else if(FullTime == true && PartTime == true && Active == true && Terminated == true){
                              return item
                          }                     
                      }).map((user) => (
                        <TableRow
                          className={classes.tableRow}
                          hover
                          key={user.id}
                        >
                          <TableCell
                            onClick={() => {
                              props.history.push("/profile/" + user.id);
                            }}
                          >
                            <div className={classes.nameContainer}>
                              <Avatar
                                className={classes.avatar}
                                src={user.avatarUrl}
                              >
                                {getInitials(user.name)}
                              </Avatar>
                              <Link variant="body1">{user.name}</Link>
                            </div>
                          </TableCell>

                          {tableColumn.columns.map(item=>
                            <TableCell 
                              onClick={() => {
                              handleShow(user,item)
                            }}
                              align="center"> 
                              {fileLogo(user,item)}
                          </TableCell>
                          )}
                        </TableRow>
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

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(UsersTable);
