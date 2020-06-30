import React, { useState, useEffect ,useReducer } from "react";

//import modules
import getInitials from "../modules/getInitials";
import Modal from "./Modal.tsx";

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
  ButtonGroup,
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
// import Modal from '@material-ui/core/Modal';
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
function downloadIcon(){return <svg id="Layer_1" enable-background="new 0 0 512 512" height="36" viewBox="0 0 512 512" width="36" xmlns="http://www.w3.org/2000/svg"><g><g id="XMLID_19_"><g id="XMLID_147_"><g id="XMLID_148_"><g id="XMLID_149_"><g id="XMLID_150_"><g id="XMLID_152_"><g id="XMLID_153_"><g id="XMLID_154_"><g id="XMLID_155_"><g id="XMLID_156_"><g id="XMLID_157_"><g id="XMLID_158_"><g id="XMLID_159_"><g id="XMLID_160_"><circle id="XMLID_161_" cx="256" cy="256" fill="#776d6b" r="256"/></g></g></g></g></g></g></g></g></g></g></g></g></g></g><path d="m511.995 256.365-59.762-59.762s-5.667-3.984-15.613-8.211l-61.707-61.548s-20.698-1.843-40.913-1.843c-8.638 0-21.742-14.208-29.348-11.277l-24.29-24.168-211.562 207.288 90.034 90.072c4.029 12.236 12.709 23.645 12.709 23.645l100.898 100.899c133.601-8.471 239.365-119.402 239.554-255.095z" fill="#57555c"/><g><path d="m397.596 172.276c-1.798 0-3.574.087-5.339.214 0-.072.005-.142.005-.214 0-37.669-30.537-68.205-68.205-68.205-10.532 0-20.505 2.391-29.41 6.654-13.792-29.003-43.354-49.057-77.607-49.057-47.439 0-85.896 38.457-85.896 85.896 0 .037.003.074.003.111-1.452-.073-2.914-.111-4.385-.111-47.439 0-85.896 38.457-85.896 85.896s38.457 85.896 85.896 85.896c16.562 0 32.021-4.699 45.139-12.819 13.118 8.12 28.577 12.819 45.139 12.819s32.021-4.699 45.139-12.819c13.118 8.12 28.577 12.819 45.139 12.819 17.38 0 33.543-5.178 47.062-14.052 12.133 8.83 27.061 14.052 43.216 14.052 40.615 0 73.54-32.925 73.54-73.54-.001-40.615-32.926-73.54-73.54-73.54z" fill="#fff"/><g><path d="m471.14 245.82c0 40.61-32.93 73.53-73.54 73.53-11.84 0-23.01-2.8-32.91-7.77-3.62-1.81-7.07-3.91-10.31-6.28-13.52 8.88-29.68 14.05-47.06 14.05-2.14 0-4.26-.08-6.36-.24-6.47-.47-12.73-1.66-18.73-3.48-2.42-.74-4.79-1.59-7.11-2.52-4.52-1.83-8.84-4.03-12.94-6.57-2.01 1.24-4.07 2.4-6.18 3.48v-239.02c16.86 8.59 30.5 22.6 38.65 39.72 8.9-4.26 18.87-6.65 29.41-6.65 37.66 0 68.2 30.54 68.2 68.21v.21c1.76-.13 3.54-.21 5.34-.21 40.61 0 73.54 32.92 73.54 73.54z" fill="#eae1dc"/></g><path d="m291.691 429.367h-71.383c-40.148 0-72.996-32.848-72.996-72.996v-50.566c0-40.148 32.848-72.996 72.996-72.996h71.383c40.148 0 72.996 32.848 72.996 72.996v50.566c.001 40.148-32.848 72.996-72.996 72.996z" fill="#238cf8"/><path d="m364.69 305.8v50.57c0 40.15-32.85 73-73 73h-35.69v-196.56h35.69c40.15 0 73 32.85 73 72.99z" fill="#0768dd"/><path d="m289.258 308.139-14.141 15.075v-48.479h-38.234v48.479l-14.141-15.075-21.88 20.525 55.138 58.777 55.138-58.777z" fill="#5eefee"/><path d="m311.14 328.66-55.14 58.78v-112.71h19.12v48.48l7.11-7.58 7.03-7.49 11.7 10.97z" fill="#54c9fc"/></g></g></svg>}
function lockIcon(){return <svg id="Layer_1" enable-background="new 0 0 512 512" height="36" viewBox="0 0 512 512" width="36" xmlns="http://www.w3.org/2000/svg"><g><g id="XMLID_500_"><g><g id="XMLID_980_"><g id="XMLID_981_"><g id="XMLID_982_"><g id="XMLID_983_"><g id="XMLID_984_"><g id="XMLID_986_"><g id="XMLID_989_"><g id="XMLID_1008_"><g id="XMLID_1009_"><g id="XMLID_1010_"><g id="XMLID_1011_"><g id="XMLID_1012_"><g id="XMLID_1013_"><g id="XMLID_1014_"><circle cx="256" cy="256" fill="#436375" r="256"/></g></g></g></g></g></g></g></g></g></g></g></g></g></g></g></g><path d="m512 256c0-.984-.026-1.962-.037-2.944l-181.244-181.244s-90.459-1.812-110.089 32.188-75.385 328.03-75.385 328.03l77.875 77.875c10.766 1.38 21.739 2.095 32.88 2.095 141.385 0 256-114.615 256-256z" fill="#274a59"/><g><g><g><g><path d="m357.72 220.22h-60.839v-78.618c0-23.732-19.307-43.039-43.039-43.039s-43.039 19.307-43.039 43.039v78.611h-60.839v-78.611c0-57.278 46.6-103.878 103.878-103.878s103.878 46.6 103.878 103.878z" fill="#fff"/></g><g><g><g><g><path d="m357.72 141.6v78.62h-60.84v-78.62c0-23.01-18.15-41.86-40.88-42.98v-60.88c56.29 1.16 101.72 47.3 101.72 103.86z" fill="#e9edf5"/></g></g></g></g><g><path d="m299.812 457.81h-87.624c-55.124 0-99.81-44.686-99.81-99.81v-143.683h287.244v143.683c0 55.124-44.687 99.81-99.81 99.81z" fill="#ffaa20"/></g><g><path d="m399.62 214.32v143.68c0 55.12-44.68 99.81-99.81 99.81h-43.81v-243.49z" fill="#ff8900"/></g></g></g><path d="m291.37 310.915c0-19.534-15.836-35.37-35.37-35.37s-35.37 15.836-35.37 35.37c0 10.634 4.7 20.165 12.128 26.649l-9.258 59.018h65l-9.258-59.018c7.428-6.484 12.128-16.015 12.128-26.649z" fill="#9e653e"/><path d="m279.24 337.56 9.26 59.02h-32.5v-121.03c19.53 0 35.37 15.83 35.37 35.37 0 10.63-4.7 20.16-12.13 26.64z" fill="#835637"/></g></g></svg>}
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
  modal:{

    'max-height': 'calc(100vh - 210px)', 
    'overflow-y': 'auto',
  },
  papermodal: {
    'max-height': 'calc(100vh - 210px)', 
    'overflow-y': 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


///////////// Table mockup////////////////////
const tableColumn = {
  Hiring: [
    { title: "Offer", value: "Hiring1" },
    { title: "Emloyment Eligibility", value: "Hiring2" },
    { title: "Tax Document", value: "Hiring3" },
    { title: "Background check", value: "Hiring4" },
  ],
  HandbookAndAgreement: [
    { title: "Defult Ip Agreement", value: "HandbookAndAgreement1" },
    { title: "HandBook", value: "HandbookAndAgreement2" },
  ],
  Benefits: [
    { title: "Marketplace Notification", value: "Benefits1" },
  ],
  Payroll: [
    { title: "1099", value: "Payroll1" },
    { title: "W2", value: "Payroll2" },
  ],
  PerformanceManagement: [
    { title: "Reviews", value: "PerformanceManagement1" },
  ],
  Other: [
    { title: "Other Document", value: "Other1" },
  ],
}
  var columns =[]
  function getcolumn(){
    var myarray=[];
    for(var k in tableColumn){
      myarray.push(k)
    }
    return myarray
  }
/////////FileData Mockup/////////////
var createdate= new Date(Date.now())
createdate = createdate.toDateString()
const filetable = [
    {
      id:1,
      Hiring: [
        {value:'Hiring1',fileurl:'https://www.google.com/',createDate:createdate},
        {value:'Hiring2',fileurl:'https://www.google.com/',createDate:createdate},
        {value:'Hiring3',fileurl:'',createDate:createdate},
        {value:'Hiring4',fileurl:'',createDate:createdate},
      ],
      HandbookAndAgreement: [
        {value:'HandbookAndAgreement1',fileurl:'aaaa',createDate:createdate},
        {value:'HandbookAndAgreement2',fileurl:'',createDate:createdate},
      ],
      Benefits: [
        {value:'Benefits1',fileurl:'',createDate:createdate},
      ],
      Payroll: [
        {value:'Payroll1',fileurl:'',createDate:createdate},
        {value:'Payroll2',fileurl:'',createDate:createdate},
      ],
      PerformanceManagement: [
        {value:'PerformanceManagement1',fileurl:'',createDate:createdate},
      ],
      Other: [
        {value:'Other1',fileurl:'',createDate:createdate},
      ],
    },
    {
      id:2,
      Hiring: [
        {value:'Hiring1',fileurl:'',createDate:createdate},
        {value:'Hiring2',fileurl:'h',createDate:createdate},
        {value:'Hiring3',fileurl:'',createDate:createdate},
        {value:'Hiring4',fileurl:'a',createDate:createdate},
      ],
      HandbookAndAgreement: [
        {value:'HandbookAndAgreement1',fileurl:'as',createDate:createdate},
        {value:'HandbookAndAgreement2',fileurl:'',createDate:createdate},
      ],
      Benefits: [
        {value:'Benefits1',fileurl:'',createDate:createdate},
      ],
      Payroll: [
        {value:'Payroll1',fileurl:'',createDate:createdate},
        {value:'Payroll2',fileurl:'',createDate:createdate},
      ],
      PerformanceManagement: [
        {value:'PerformanceManagement1',fileurl:'',createDate:createdate},
      ],
      Other: [
        {value:'Other1',fileurl:'',createDate:createdate},
      ],
    },
]

const DocumentTable = (props) => {
const { className, users, ...rest } = props;
const classes = useStyles();
const [rowsPerPage, setRowsPerPage] = useState(10); //posts per page
const [page, setPage] = useState(0); // current page
const [posts, setPosts] = useState([]); //เก็บข้อมูล array
const [searchTerm, setSearchTerm] = React.useState(""); //searching
const [state, setState] = React.useState({
    FullTime: false,
    PartTime: false,
    Active: false,
    Onboarding:false,
    Terminated: false,
    Rayong:false,
    Bangkok:false,
    Department1:false,
    Department2:false,
    Department3:false,
  });

  //animation modal 
const [isOpens, setOpens ] = useState(false)

const handleVisible = (e,user) => {
      setOpens(e)
      setUserTemp(user) 
};

const renderCloseComponent = () => (
  <button className={'close'} onClick={() => handleVisible(false)}>
  X
  </button>
);

///

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { FullTime, PartTime, Active,Onboarding , Terminated,Rayong,Bangkok,Department1,Department2,Department3} = state;

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
  const handleChangeCatagory = (value)=>{
    setCatagory(value)
  }

  const [catagory,setCatagory]=useState('Hiring')//catagory use to render the table 
  const [modalContent,setModalContent]=useState('')//change model content by data that user click
  const [userTemp,setUserTemp]=useState(false)
  const [fileTemp,setFileTemp]=useState(false)
  const [show,setShow] = useState(false)//state show modal
  const handleClose = () => setShow(false);
  // const handleShow = (user,file) => {
  //   setUserTemp(user)
  //   setFileTemp(file)
  //   setShow(true);
  // }

//buttongroup to change catagory 
function navBar(){return <div className={classes.root}>
<ButtonGroup color="secondary" aria-label="text primary button group">
  <Button onClick={() =>setCatagory('Hiring')}>Hiring</Button>
  <Button onClick={() =>setCatagory('HandbookAndAgreement')}>HandbookAndAgreement</Button>
  <Button onClick={() =>setCatagory('PerformanceManagement')}>PerformanceManagement</Button>
  <Button onClick={() =>setCatagory('Benefits')}>Benefits</Button>
  <Button onClick={() =>setCatagory('Payroll')}>Payroll</Button>
  <Button onClick={() =>setCatagory('Other')}>Other</Button> 
</ButtonGroup>
</div>
}


  function isFileExist(user,file){
    for (let i = 0; i < filetable.length; i++){
      if(user.id==filetable[i].id){
        for(let j=0; j<filetable[i][catagory].length;j++){
          if(filetable[i][catagory][j].value==file.value){
            if(filetable[i][catagory][j].fileurl!=''){
                return true
              }
            }
          }
      }
    }
    return false
  }
  

  const [open, setOpen] = React.useState(false);
  const handleClick=(user)=>{
    let content=<div className={classes.root}> 
      
            {filetable.filter((query)=>query.id==user.id).map(query=>{return <div className={classes.root}>
                <Table style={{ overflowX: "scroll" }}>
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Download</TableCell>
                        <TableCell>Upload</TableCell>
                    </TableRow>
                    </TableHead>
              {query[catagory].map(item=>{return <TableBody>
                <TableRow>
                <TableCell>{item.value}</TableCell>
                <TableCell>{item.createDate}</TableCell>
                <TableCell>{fileLogo(user,item)}</TableCell>  
                <TableCell>{downloadlink(item.fileurl)}</TableCell>
                <TableCell><p id="transition-modal-description"><BackupIcon/><input type="file" name="file" /></p></TableCell>
                </TableRow></TableBody>
              })}
          {/* </TableBody> */}
          </Table></div>})}
    </div>
    setModalContent(content)
  }

  function fileLogo(user,file){
    for (let i = 0; i < filetable.length; i++){
      if(user.id==filetable[i].id){
          for(let j=0; j<filetable[i][catagory].length;j++){
            if(filetable[i][catagory][j].value==file.value){
              if(filetable[i][catagory][j].fileurl!=''){
                return DocIcon()
              }
            }
          }
      }
    }
    return NoDocIcon()
  }

  function downloadlink(fileurl){
    if(fileurl!=''){
    return <a target="_blank" href={fileurl}>{downloadIcon()}Download File</a>
    }else return <p>{lockIcon()} Not avaliable</p>
  }

  return (
    <div>

       <Modal
          // default false
          isOpen={isOpens}
          // default 60%
          width={'80%'}
          // default from right
          directionFrom={'right'}
          // default Modal
          contentLabel={'Demo Modal'}
          onRequestClose={() => handleVisible(false,false)}
          // optional for accessibility
          setAppElement={'#root'}
          // default false allows you to skip setAppElement prop for react-modal
          ariaHideApp={true}
          // allow you to set the maximum width of the viewport
          // at which the modal will be expanded to full screen
          maxMediaWidth={1024}
        >
           <Fade in={isOpens}>
           <div className={classes.papermodal}>
          <div className={classes.nameContainer}>
            <Avatar
              className={classes.avatar}
              src={userTemp.avatarUrl}
            >
              {getInitials(userTemp.name)}
            </Avatar>
            <h2 id="transition-modal-title">{userTemp.name+" - "+catagory}</h2>
          </div>
            {modalContent}
          </div> 
         
        </Fade>
        </Modal>
       
{/* 
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
            <h2 id="transition-modal-title">{userTemp.name+" - "+catagory}</h2>
          </div>
            {modalContent}
          </div>
        </Fade>
      </Modal> */}

      <Grid container spacing={3}>
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
                      checked={Onboarding} 
                        onChange={handleChange} 
                        name="Onboarding"
                      />
                    }
                    label="Onboarding"
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
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Filter By location
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Bangkok}
                        onChange={handleChange}
                        name="Bangkok"
                      />
                    }
                    label="Bangkok"
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={Rayong} 
                        onChange={handleChange} 
                        name="Rayong"
                      />
                    }
                    label="Rayong"
                  />
                  
                </FormGroup>
              </FormControl>
               <Divider />
               <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.headerText}>
                  Filter By Department
                </FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={
                      <Checkbox
                        checked={Department1}
                        onChange={handleChange}
                        name="Department1"
                      />
                    }
                    label="Department1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Department2}
                        onChange={handleChange}
                        name="Department2"
                      />
                    }
                    label="Department2"
                  />
                  
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={Department3} 
                        onChange={handleChange} 
                        name="Department3"
                      />
                    }
                    label="Department3"
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
        {console.log(isOpens)}

        {/* Table */}
        <Grid item xs={9} md={10}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
            <div className={classes.row1}><h1>Documents</h1></div>
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
                  {navBar()}
                  <Table style={{ overflowX: "scroll" }}>
                    <TableHead>
                      <TableRow>
                      <TableCell>Name</TableCell>
                      {tableColumn[catagory].map(item=>
                        <TableCell align="center">{item.title}</TableCell>
                      )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* const { FullTime, PartTime, Active,Onboarding , Terminated,Rayong,Bangkok,Department1,Department2,Department3} = state; */}
                      {results.filter((item)=> {
                        let conditionsCount=0
                        let TypeConditions=[],StatusConditions=[],ProvinceConditions=[],DepartmentConditions=[]
                        if(FullTime){TypeConditions.push('Full Time')}
                        if(PartTime){TypeConditions.push('Part Time')}
                        if(Active){StatusConditions.push('Active')}
                        if(Onboarding){StatusConditions.push('Onboarding')}
                        if(Terminated){StatusConditions.push('Terminated')}
                        if(Rayong){ProvinceConditions.push('Rayong')}
                        if(Bangkok){ProvinceConditions.push('Bangkok')}
                        if(Department1){DepartmentConditions.push('Department1')}
                        if(Department2){DepartmentConditions.push('Department2')}
                        if(Department3){DepartmentConditions.push('Department3')}
                        if(TypeConditions.length+StatusConditions.length+ProvinceConditions.length+DepartmentConditions.length==0){
                          return item}
                        if(TypeConditions.length==0){
                          TypeConditions.push('Full Time')
                          TypeConditions.push('Part Time')
                        }
                        if(StatusConditions.length==0){
                          StatusConditions.push('Active')
                          StatusConditions.push('Onboarding')
                          StatusConditions.push('Terminated')
                        }
                        if(ProvinceConditions.length==0){
                          ProvinceConditions.push('Rayong')
                          ProvinceConditions.push('Bangkok')
                        }
                        if(DepartmentConditions.length==0){
                          DepartmentConditions.push('Department1')
                          DepartmentConditions.push('Department2')
                          DepartmentConditions.push('Department3')
                        }
                        

                        return TypeConditions.includes(item.type) && StatusConditions.includes(item.status) && ProvinceConditions.includes(item.province) && DepartmentConditions.includes(item.department)
                        
                      
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
                          {tableColumn[catagory].map(item=>
                            <TableCell 
                              onClick={() => {
                              handleClick(user)
                              handleVisible(true ,user)
                              // handleShow(user,item)
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

DocumentTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default withRouter(DocumentTable);
