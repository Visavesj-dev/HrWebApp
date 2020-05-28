import React, { useRef,useState, useEffect } from "react";

// Components
import MaterialTable from "material-table";
import {
  TableContainer,
  Card,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  TextField,
  Switch,
} from "@material-ui/core";
import html2canvas from 'html2canvas';
import Button from '@material-ui/core/Button';
import { lighten, withStyles } from "@material-ui/core/styles";
import OrganizationChart from "@dabeng/react-orgchart";
import JSONDigger from "json-digger";
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from "uuid";

// Icons
import { Flag, Edit, Visibility } from "@material-ui/icons";
import SaveIcon from '@material-ui/icons/Save';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UpdateIcon from '@material-ui/icons/Update';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
  },
})(LinearProgress);

//show detail by clicking a node.
const ShowDetail = ({ data, open, setOpen }) => {
  return (
    open && (
      <Dialog open={open} onClose={() => setOpen(false)} className="p-2">
        <DialogTitle style={{ backgroundColor: data[1] }}>
          Personal detail
        </DialogTitle>
        <DialogContent style={{ backgroundColor: data[1] }}>
          <div className="pb-3">
            <div className="pb-2">
              <img
                src={data[0].img}
                alt="img"
                style={{ width: 40, borderRadius: "50%" }}
              />
              &nbsp;{data[0].name}
              <span className="text-muted">
                &nbsp; - &nbsp;{data[0].position}
              </span>
            </div>

            {data[0].crossTeam && (
              <div className="py-3 text-center">
                Work with{" "}
                {data[0].crossTeam.map((value, index) => {
                  return index === 0 ? value : ", " + value;
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};

const MyNode = ({ nodeData, color }) => {
  return (
    <div
      className="shadow text-dark rounded p-3 border"
      style={{ backgroundColor: color ? color : "#FFF2E6" }}
    >
      <div className="h5">{nodeData.position}</div>
      <div className="py-1">
        <img
          src={nodeData.img}
          alt="img"
          style={{ width: 40, borderRadius: "50%" }}
        />
        &nbsp;{nodeData.name}
      </div>
      {nodeData.crossTeam && (
        <div className="pt-3">
          Work with{" "}
          {nodeData.crossTeam.map((value, index) => {
            return index === 0 ? value : ", " + value;
          })}
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [successQuery, setSuccessQuery] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [newNodeTitle, setNewNodeTitle] = useState("");

  // Base
  const [organization, setOrganization] = useState(null);
  const [team, setTeam] = useState(null);
  const [manager, setManager] = useState(null);
  const [all,setAll] = useState(null);
  //amout of person id 
  const [countId, setCountId] = useState(7)
  const [someone, setsomeone] = useState("");
  const [temp,setTemp] = useState({
    id: "",
    img:"",
    name: "",
    position: "",
  })
  
  const onTitleChange = e => {
    setNewNodeTitle(e.target.value);
  };



  // Base
  const queryOrganization = async () => {
    setOrganization({
      id: "1",
      img:
        "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208051/96119229-beautiful-girl-face-cartoon-vector-illustration-graphic-design.jpg",
      name: "Alicia Lee",
      position: "Manager Director",
    });
  };

  const queryTeam = async () => {
    setTeam({
      id: "2",
      crossTeam: ["HR", "Security"],
      img:
        "https://image.shutterstock.com/image-vector/beautiful-girl-face-cartoon-600w-1032904255.jpg",
      name: "Isabelle Cerys",
      position: "Manager",
    });
  };

  const queryManager = async () => {
    setManager([
      {
        id: "3",
        img:
          "https://image.shutterstock.com/image-vector/beautiful-girl-face-cartoon-600w-1032904255.jpg",
        name: "Isabelle Cerys",
        position: "Manager",
      },
      {
        id: "4",
        img:
          "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208043/96119220-cute-boy-face-cartoon-vector-illustration-graphic-design.jpg",
        name: "Darren Ryan",
        position: "Asst. Manager",
      },
      {
        id: "5",
        img:
          "https://image.shutterstock.com/image-vector/young-man-face-cartoon-260nw-1224888760.jpg",
        name: "Xavier Musa",
        position: "Asst. Manager",
      },
      {
        id: "6",
        img:
          "https://previews.123rf.com/images/farhad73/farhad731807/farhad73180700006/104271850-man-cartoon-face-with-glasses-vector-illustration-.jpg",
        name: "Chris Otis",
        position: "Asst. Manager",
      },
    ]);
  };
  const queryAll = async () => {
    setAll([
      {
        id: "3",
        img:
          "https://image.shutterstock.com/image-vector/beautiful-girl-face-cartoon-600w-1032904255.jpg",
        name: "Isabelle Cerys",
        position: "Manager",
      },
      {
        id: "4",
        img:
          "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208043/96119220-cute-boy-face-cartoon-vector-illustration-graphic-design.jpg",
        name: "Darren Ryan",
        position: "Asst. Manager",
      },
      {
        id: "5",
        img:
          "https://image.shutterstock.com/image-vector/young-man-face-cartoon-260nw-1224888760.jpg",
        name: "Xavier Musa",
        position: "Asst. Manager",
      },
      {
        id: "6",
        img:
          "https://previews.123rf.com/images/farhad73/farhad731807/farhad73180700006/104271850-man-cartoon-face-with-glasses-vector-illustration-.jpg",
        name: "Chris Otis",
        position: "Asst. Manager",
      },
    ]);
  };

  useEffect(() => {
    queryOrganization();
    queryTeam();
    queryManager();
    queryAll();
    // queryAllDepartment();
    // queryAllDepartment();
    setSuccessQuery(true);
  }, []);

  const handleChooseSomeone = (e) => {
    setsomeone(e.target.value);
    setNewNodeTitle(e.target.value.position)
    setTemp({
      id:e.target.value.id,
      img:e.target.value.img,
      name:e.target.value.name,
      position:newNodeTitle,
    })
  };

  // const handleCapture =()=>{
  //   html2canvas(document.body).then(function(canvas) {
  //   // html2canvas($("#orgchart")).then(function(canvas) {
  //     document.body.appendChild(canvas);
  // });
  // }
  const [isEdited, setIsEdited] = useState(false);
  const [refresh, setRefrest] = useState(true);

  var chartSource = successQuery && organization;
  if (successQuery && !isEdited) {
    var tmp = team;
    tmp["children"] = manager;
    chartSource["children"] = [];
    chartSource["children"].push(tmp);
    console.log("Hi");
  }
  // Chart Manager
  const dsDigger = new JSONDigger(chartSource, "id", "children");
  const [isEditMode, setIsEditMode] = useState(false);

  // Chart Manager
  const getNewNode = () => {
    // query
    //  console.log(dsDigger.ids)
    // console.log(dsDigger.countNodes(dsDigger.ds))
    var node = {
      id: String(countId),
      // id: String(Math.floor(Math.random()* 100000)),
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
      name: "Maisy Chick",
      position: "Employee",
    };
    setCountId(countId+1)
    return node;
  };

  //action button
  const addChildNode = async () => {
    if(selectedNode!=null){
      await dsDigger.addChildren(selectedNode.id, getNewNode());
      chartSource = dsDigger.ds;
      console.log(chartSource)
      setIsEdited(true);
      setRefrest(!refresh);
    }
  };

  const updateNodes = async () => {
    setTemp({
      position:newNodeTitle,
    })
    // console.log("this is temp and new node title :")
    // console.log(temp)
    // console.log('this is node title :')
    // console.log(newNodeTitle)
    // console.log('selected node :')
    // console.log(selectedNode)
    console.log(selectedNode)
    console.log( {
      id: selectedNode.id,
      img: temp.img,
      name: temp.name,
      position: newNodeTitle
    })
    // console.log(dsDigger)
    await dsDigger.updateNode({
      id: selectedNode.id,
      img: temp.img,
      name: temp.name,
      position: newNodeTitle,
      relationship: selectedNode.relationship,
    });
    chartSource = dsDigger.ds;
    setIsEdited(true);
    setRefrest(!refresh);
    setIsEditMode(false);
    setsomeone("")
    setNewNodeTitle("")
  };

  const remove = async () => {
    if(selectedNode!=null){
      await dsDigger.removeNodes(selectedNode.id);
      chartSource = dsDigger.ds;
      setIsEdited(true);
      setRefrest(!refresh);
    }
  };
  const orgchart = useRef();
  const exportTo = () => {
    orgchart.current.exportTo(filename, fileextension);
  };

  const [filename, setFilename] = useState("organization_chart");
  const [fileextension, setFileextension] = useState("png");

  const onFileNameChange = event => {
    setFilename(event.target.value);
  };

  const onExtensionChange = event => {
    setFileextension(event.target.value);
  };

  return (
    successQuery && (
      <div className="row py-4">
        <div className="col-12">
          <div className="row justify-content-center px-2">
            <div className="col-12 p-4 text-center">
              <h4>Organization Chart</h4>
            </div>
          </div>
          
          <div className="row justify-content-center px-5 pt-2 ">
            <div className="col-4 pt-3 text-left">
              <Switch
                checked={isEditMode}
                onChange={(e) => {
                  setIsEditMode(e.target.checked);
                  setsomeone("")
                  setNewNodeTitle("")
                }}
              />
              Edit mode
            </div>

            <div className="col-4 pt-3 text-left">
              <Button disabled={!isEditMode} onClick={addChildNode}variant="contained" color="primary"> {<AddCircleIcon/>}
                Add Child Nodes
              </Button>
            </div>
            <div className="col-4 pt-3 text-left">
              <Button disabled={!isEditMode} onClick={remove} variant="contained" color="secondary"> {<RemoveCircleIcon/>}
                Remove Nodes
              </Button>
            </div>
          </div>

          <div className="row justify-content-center px-5 pt-2 ">
          <div className="col-4 pt-3 text-left">
          <FormControl>
                <InputLabel>Choose someone to add</InputLabel>
                <Select
                  disabled={!isEditMode}
                  value={someone}
                  className="text-left"
                  onChange={handleChooseSomeone}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {all.map((value, index) => {
                    return (
                      <MenuItem key={index} value={value}>
                        {value.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>Choose someone to update</FormHelperText>
          </FormControl>
          </div>
          <div className="col-4 pt-3 text-left">
            <input
              disabled={!isEditMode}
              type="text"
              placeholder="title"
              value={newNodeTitle}
              onChange={onTitleChange}
            /></div>

          <div className="col-4 pt-3 text-left">
            <Button disabled={!isEditMode} onClick={updateNodes} variant="contained" > {<UpdateIcon/>}
              Update Nodes
            </Button></div>
          </div>

          <div className="row justify-content-center px-2">
          <div className="col-12 p-4 text-center">
            <section className="toolbar">
            <label htmlFor="txt-filename">Filename  :  </label>
            <input
              id="txt-filename"
              type="text"
              value={filename}
              onChange={onFileNameChange}
              style={{ fontSize: "1rem", marginRight: "2rem" }}
            />
            <span>File extension : </span>
            <input
              id="rd-png"
              type="radio"
              value="png"
              checked={fileextension === "png"}
              onChange={onExtensionChange}
            />
            <label htmlFor="rd-png">  png  </label>
            <input
              style={{ marginLeft: "1rem" }}
              id="rd-pdf"
              type="radio"
              value="pdf"
              checked={fileextension === "pdf"}
              onChange={onExtensionChange}
            />
            <label htmlFor="rd-pdf">  pdf  </label>
            <Button onClick={exportTo} style={{ marginLeft: "2rem" }} color="primary" variant="contained"> {<SaveIcon />}
              Export
            </Button>
            </section>
            {/* <Button onClick={handleCapture} style={{ marginLeft: "2rem" }} color="primary" variant="contained"> {<SaveIcon />}
              Export
            </Button> */}
          </div>
        </div>

          <div className="row justify-content-center px-5 pb-4" >
            <div className={("px-0 text-center")} id='orgchart'>
              <OrganizationChart
                ref={orgchart}
                datasource={chartSource}
                chartClass="orgChart"
                collapsible={false}
                NodeTemplate={MyNode}
                onClickNode={
                  !isEditMode
                    ? (nodeData) => {
                        setSelectedNode([nodeData, "#FFF2E6"]);
                        setOpen(true);
                      }
                    : (nodeData) => {
                        setSelectedNode(nodeData);
                      }
                }
                pan={true}
              />
            </div>
            <ShowDetail data={selectedNode} open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
