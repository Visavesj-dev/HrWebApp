import React, { useState, useCallback } from "react";

//import materials
import { Grid, Paper } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
  marginBot:{
    marginBottom:"6px"
  },
  textFieldPadding: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  label: {
    textAlign: "left",
  },
  label2:{
    textAlign: "right",
  },
  margin: {
    margin: theme.spacing(1),
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

function TeamDirectory(props) {
  const classes = useStyles();
  const [startDate, setStartDate] = useState();
  const [expireDate, setExpireDate] = useState(new Date());
  const [file, setFile] = useState([]);
  const height = 250;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <Grid item md={12} xs={12}>
        <h1>Team directory</h1>
        </Grid>
        <Grid item md={2} xs={2}> 
        
        </Grid>
        <Grid item md={10} xs={10}>
        <Grid item md={10} xs={10}>
          <div className={classes.label}>
            <h3>Team Vision</h3>
          </div>
            <form noValidate autoComplete="off">
              <div className={classes.textFieldPadding}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  id="teamVision"
                  defaultValue="VIsion of the team"
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
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  id="teamAnnualMission"
                  defaultValue="Team Annual Mission"
                />
              </div>
            </form>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className={classes.label}>
              <h3>Team Culture Fit</h3>
            </div>
          </Grid>
{/* 
            <Grid item md={1} xs={1}>
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
                    fullWidth
                    required
                    variant="outlined"
                    id="culture1"
                    defaultValue="team culture"
                  />
                  <div className={classes.marginBot}/>
                  <TextField
                    fullWidth
                    required
                    variant="outlined"
                    id="culture2"
                    defaultValue="team culture"
                  />
                  <div className={classes.marginBot}/>
                  <TextField
                    fullWidth
                    required
                    variant="outlined"
                    id="culture2"
                    defaultValue="team culture"
                  />
                  <div className={classes.marginBot}/>
                  <TextField
                    fullWidth
                    required
                    variant="outlined"
                    id="culture4"
                    defaultValue="team culture"
                  />
                  <div className={classes.marginBot}/>
                  <TextField
                    fullWidth
                    required
                    variant="outlined"
                    id="culture5"
                    defaultValue="team culture"
                  />
                  <div className={classes.marginBot}/>
                </div>
              </form>
            </Grid>
            </Grid>

        {/* footer button         */}
        <Grid item md={8} xs={8}></Grid>
        <Grid item md={1.5} xs={1.5}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              props.history.push("/directory");
            }}
          >
            SAVE
          </Button>
          </Grid>
          <Grid item md={2} xs={2}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              props.history.push("/directory");
            }}
          >
            BACK
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default TeamDirectory;