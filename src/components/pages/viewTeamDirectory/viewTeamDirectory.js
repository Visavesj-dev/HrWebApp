import React, { useState, useCallback } from "react";

//import materials
import { RadioGroup,Radio,Grid, Paper, Typography, Divider, useRadioGroup } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  AttachFile,
  Description,
  PictureAsPdf,
  Theaters,
} from "@material-ui/icons";
//import style
import { makeStyles } from "@material-ui/core/styles";
import { ExpandLess } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    textAlign: "center",
    width: "100%",
    marginTop: 100,
  },
  profile: {
    marginBottom: 20,
    width: "85%",
  },
  details: {
    display: "flex",
  },
  avatar: {
    marginRight: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(1.5),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    marginTop: 25,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  tabs1: {
    width: "85%",
    marginTop: 20,
  },
  row1: {
    textAlign: "right",
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2.6),
  },
  marginBot: {
    marginBottom: "6px",
  },
  textFieldPadding: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  label: {
    textAlign: "left",
  },
  label2: {
    textAlign: "right",
  },
  margin: {
    margin: theme.spacing(1),
  },
  margintop:{
    marginTop:'3%'
  },
}));

const handlePreviewIcon = (fileObject, classes) => {
  const { type } = fileObject.file;
  const iconProps = {
    className: classes.image,
  };

  if (type.startsWith("video/")) return <Theaters {...iconProps} />;
  // if (type.startsWith("audio/")) return <AudioTrack {...iconProps} />

  switch (type) {
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return <Description {...iconProps} />;
    case "application/pdf":
      return <PictureAsPdf {...iconProps} />;
    default:
      return <AttachFile {...iconProps} />;
  }
};

function ViewTeamDirectory(props) {
  const classes = useStyles();
  const [startDate, setStartDate] = useState();
  const [expireDate, setExpireDate] = useState(new Date());
  const [file, setFile] = useState([]);
  const height = 250;
  const [value, setValue] = React.useState('team2');
  const exampleText =
    "Our vision is to create a better everyday life for many people.” That’s aspirational, short and to the point. More than that, it sets the tone for the company and makes it clear that they’re in the market to offer low-priced good furnishings that suit everyone’s lifestyle.";
  const mockup =[
    {
      id:'team1',
      vision:exampleText,
      mission:exampleText,
      culture1:'team1',
      culture2:'team1',
      culture3:'team1',
      culture4:'team1',
      culture5:'team1',
    },
    {
      id:'team2',
      vision:'team2',
      mission:'team2',
      culture1:'team2',
      culture2:'team2',
      culture3:'team2',
      culture4:'team2',
      culture5:'team2',
    },
    {
      id:'team3',
      vision:exampleText,
      mission:exampleText,
      culture1:'team3',
      culture2:'teaweferfem3',
      culture3:'team3',
      culture4:'team3',
      culture5:'team3',
    },
  ]

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={12} xs={12}>
          <h1>{mockup.filter(item=>{return item.id==value}).map(item=>{return item.id})}</h1>
        </Grid>
        <Grid item md={2} xs={2}>
          <div className={classes.margintop}/>
          <div>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.colorText}
              >
                Team Filter
              </Typography>
              <Divider />
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="team"
                  name="team"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="team1"
                    control={<Radio />}
                    label="team1"
                  />
                  <FormControlLabel
                    value="team2"
                    control={<Radio />}
                    label="team2"
                  />
                  <FormControlLabel
                    value="team3"
                    control={<Radio />}
                    label="team3"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </div>
        </Grid>
        <Grid item md={10} xs={10}>
          <Grid item md={10} xs={10}>
            <div className={classes.label}>
              <h3>Team Vision</h3>
            </div>
            <form noValidate autoComplete="off">
              <div className={classes.textFieldPadding}>
                <TextField
                  disabled
                  fullWidth
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  id="teamVision"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.vision})}
                />
              </div>
            </form>

            <div className={classes.label}>
              <h3>Team Annual Mission</h3>
            </div>

            <form noValidate autoComplete="off">
              <div className={classes.textFieldPadding}>
                <TextField
                  fullWidth
                  disabled
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  id="teamAnnualMission"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.mission})}
                />
              </div>
            </form>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className={classes.label}>
              <h3>Team Culture Fit</h3>
            </div>
          </Grid>

          {/* <Grid item md={0.5} xs={0.5}>
            <div className={classes.row1}>1</div>
            <div className={classes.row1}>2</div>
            <div className={classes.row1}>3</div>
            <div className={classes.row1}>4</div>
            <div className={classes.row1}>5</div>
          </Grid> */}
          <Grid item md={9} xs={9}>
            <form noValidate autoComplete="off">
              <div className={classes.textFieldPadding}>
                <TextField
                  disabled
                  fullWidth
                  required
                  variant="outlined"
                  id="culture1"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.culture1})}                
                  // defaultValue ='213213'
                />
                <div className={classes.marginBot} />
                <TextField
                  disabled
                  fullWidth
                  required
                  variant="outlined"
                  id="culture2"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.culture2})}
                />
                <div className={classes.marginBot} />
                <TextField
                  disabled
                  fullWidth
                  required
                  variant="outlined"
                  id="culture2"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.culture3})}
                />
                <div className={classes.marginBot} />
                <TextField
                  disabled
                  fullWidth
                  required
                  variant="outlined"
                  id="culture4"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.culture4})}
                />
                <div className={classes.marginBot} />
                <TextField
                  disabled
                  fullWidth
                  required
                  variant="outlined"
                  id="culture5"
                  defaultValue={mockup.filter(item=>{return item.id==value}).map(item=>{return item.culture5})}
                />
                <div className={classes.marginBot} />
              </div>
            </form>
          </Grid>
        </Grid>
        {/* footer button         */}
        <Grid item md={8} xs={8}></Grid>
        <Grid item md={3} xs={3}>
          {/* <Button
            color="primary"
            variant="contained"
            onClick={() => {
              props.history.push("/directory");
            }}
          >
            SAVE
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              props.history.push("/directory");
            }}
          >
            BACK
          </Button> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default ViewTeamDirectory;
