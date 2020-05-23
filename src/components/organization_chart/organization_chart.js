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
import Button from '@material-ui/core/Button';
import { Autocomplete } from "@material-ui/lab";
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
            {/* <div className="py-2">
              <Flag className="colorDefault3" /> &nbsp;Objective
              <br />
              <span className="p-1">{data[0].objective}</span>
            </div> */}
            {/* <div className="py-3">
              <Flag className="colorDefault2" /> &nbsp;Key Result
              <br />
              {data[0].keyResult.map((value, index) => {
                return (
                  <span key={index} className="p-1">
                    {value}
                    <br />
                  </span>
                );
              })}
            </div> */}
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
  const [newNodeName, setNewNodeName] = useState("");
  const [newNodeTitle, setNewNodeTitle] = useState("");

  // Base
  const [organization, setOrganization] = useState(null);
  const [team, setTeam] = useState(null);
  const [manager, setManager] = useState(null);
  const [member, setMember] = useState(null);

  // Compare
  const [allDepartment, setAllDepartment] = useState(null);
  const [departmentToCompare, setDepartmentToCompare] = useState("");
  const [organizationCompare, setOrganizationCompare] = useState(null);
  const [teamCompare, setTeamCompare] = useState(null);
  const [managerCompare, setManagerCompare] = useState(null);


  const onNameChange = e => {
    setNewNodeName(e.target.value);
  };

  const onTitleChange = e => {
    setNewNodeTitle(e.target.value);
  };



  // Base
  const queryOrganization = async () => {
    setOrganization({
      id: "1",
      objective: "Organization Objective",
      keyResult: [
        "1st Organization key result",
        "2nd Organization key result",
        "3nd Organization key result",
      ],
      img:
        "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208051/96119229-beautiful-girl-face-cartoon-vector-illustration-graphic-design.jpg",
      name: "Alicia Lee",
      position: "Manager Director",
    });
  };

  const queryTeam = async () => {
    setTeam({
      id: "2",
      objective: "Team Objective",
      keyResult: [
        "1st Team key result",
        "2nd Team key result",
        "3nd Team key result",
      ],
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
        objective: "Manager Objective",
        keyResult: [
          "1st Manager key result",
          "2nd Manager key result",
          "3nd Manager key result",
        ],
        img:
          "https://image.shutterstock.com/image-vector/beautiful-girl-face-cartoon-600w-1032904255.jpg",
        name: "Isabelle Cerys",
        position: "Manager",
        score: 0.75,
      },
      {
        id: "4",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
          "3nd Asst. Manager key result",
        ],
        img:
          "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208043/96119220-cute-boy-face-cartoon-vector-illustration-graphic-design.jpg",
        name: "Darren Ryan",
        position: "Asst. Manager",
        score: 0.67,
      },
      {
        id: "5",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
          "3nd Asst. Manager key result",
        ],
        img:
          "https://image.shutterstock.com/image-vector/young-man-face-cartoon-260nw-1224888760.jpg",
        name: "Xavier Musa",
        position: "Asst. Manager",
        score: 0.8,
      },
      {
        id: "6",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
          "3nd Asst. Manager key result",
        ],
        img:
          "https://previews.123rf.com/images/farhad73/farhad731807/farhad73180700006/104271850-man-cartoon-face-with-glasses-vector-illustration-.jpg",
        name: "Chris Otis",
        position: "Asst. Manager",
        score: 0.78,
      },
    ]);
  };

  const queryMember = async () => {
    setMember([
      {
        id: 1,
        image: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
        name: "David",
        score: 0.76,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeeJdW5xbhUyeG-UDCzSr_SrNKbds_L82XbXo_18zvOi_QEkbs&usqp=CAU",
        name: "Joseph",
        score: 0.86,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 3,
        image:
          "https://img.clipartlook.com/face-clip-art-faces-clipart-710_800.png",
        name: "William",
        score: 0.84,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx_0uLdwP-EgU6ksQQyEgWOVAzpL004KLUDNt11Yh7V-5BJTt-&usqp=CAU",
        name: "Matthew",
        score: 0.75,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHYF25OBKV7z8odPHgSpirRIoIs3gr6r231-HKwbrsWm8bBEBJ&usqp=CAU",
        name: "James",
        score: 0.86,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 6,
        image:
          "https://www.how-to-draw-funny-cartoons.com/image-files/how-to-draw-a-person-004.jpg",
        name: "Davis",
        score: 0.9,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
      {
        id: 7,
        image:
          "https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170713437/82546151-cute-cartoon-senior-avatar-female-old-people-face-vector-illustration.jpg",
        name: "Wilson",
        score: 0.69,
        objective: "Objective detail",
        keyResult: ["1st key result", "2nd key result", "3nd key result"],
      },
    ]);
  };

  const queryAllDepartment = async () => {
    setAllDepartment(["Security", "Procedure"]);
  };

  // Compare
  const queryOrganizationCompare = async (department) => {
    setOrganizationCompare({
      id: "1",
      objective: "Organization Objective",
      keyResult: [
        "1st Organization key result",
        "2nd Organization key result",
        "3nd Organization key result",
      ],
      img:
        "https://previews.123rf.com/images/jemastock/jemastock1802/jemastock180208051/96119229-beautiful-girl-face-cartoon-vector-illustration-graphic-design.jpg",
      name: "Alicia Lee",
      position: "Director Manager",
    });
  };

  const queryTeamCompare = async (department) => {
    setTeamCompare({
      id: "21",
      objective: "Team Objective",
      keyResult: ["1st Team key result", "2nd Team key result"],
      crossTeam: ["Security"],
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
      name: "Maisy Chick",
      position: "Manager",
    });
  };

  const queryManagerCompare = async (department) => {
    setManagerCompare([
      {
        id: "22",
        objective: "Team Objective",
        keyResult: [
          "1st Manager key result",
          "2nd Manager key result",
          "3nd Manager key result",
        ],
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
        name: "Maisy Chick",
        position: "Manager",
        score: 0.89,
      },
      {
        id: "23",
        objective: "Asst. Manager Objective",
        keyResult: [
          "1st Asst. Manager key result",
          "2nd Asst. Manager key result",
        ],
        img:
          "https://d23caqvf47xv7y.cloudfront.net/buyers_guide/glasses-for-your-face-shape/oval/illustration-new.png",
        name: "Libby  Hana",
        position: "Asst. Manager",
        score: 0.79,
      },
    ]);
  };

  useEffect(() => {
    queryOrganization();
    queryTeam();
    queryManager();
    queryMember();
    queryAllDepartment();
    setSuccessQuery(true);
  }, []);

  const handleChooseCompare = (e) => {
    setDepartmentToCompare(e.target.value);
    queryOrganizationCompare(e.target.value);
    queryTeamCompare(e.target.value);
    queryManagerCompare(e.target.value);
    setIsEditMode(false);
  };

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

  var chartSourceCompare = departmentToCompare && organizationCompare;
  if (departmentToCompare) {
    var tmp = teamCompare;
    tmp["children"] = managerCompare;
    chartSourceCompare["children"] = [];
    chartSourceCompare["children"].push(tmp);
  }

  // Chart Manager
  const dsDigger = new JSONDigger(chartSource, "id", "children");
  const [isEditMode, setIsEditMode] = useState(false);

  // Chart Manager
  const getNewNode = () => {
    // query
    var node = {
      id: String(Math.random()),
      objective: "Objective",
      keyResult: ["1st key result", "2nd key result"],
      crossTeam: ["Security"],
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWs11qjIw8bYjHamqBOcgf4CrmjVZwVsMPTi68fCE-MD6BOP17&usqp=CAU",
      name: "Maisy Chick",
      position: "Employee",
    };

    return node;
  };

  const addChildNode = async () => {
    if(selectedNode!=null){
      await dsDigger.addChildren(selectedNode.id, getNewNode());
      chartSource = dsDigger.ds;
      setIsEdited(true);
      setRefrest(!refresh);
    }
  };

  const updateNodes = async () => {
    console.log(selectedNode.id)
    await dsDigger.updateNodes(selectedNode.id, {
      id: uuidv4(),
      name: newNodeName,
      position: newNodeTitle
    });
    chartSource = dsDigger.ds;
    setIsEdited(true);
    setRefrest(!refresh);
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
            <div className="col-5 px-5 px-md-5 text-left">
              <Autocomplete
                options={member}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="addNode"
                    label="Employee"
                    fullWidth
                  />
                )}
              />
            </div>

            <div className="col-5 px-5 px-md-5 text-right">
              <FormControl>
                <InputLabel>Department</InputLabel>
                <Select
                  value={departmentToCompare}
                  onChange={handleChooseCompare}
                  className="text-left"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {allDepartment.map((value, index) => {
                    return (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>Select department to compare</FormHelperText>
              </FormControl>
            </div></div>
            
          <div className="row justify-content-center px-5 pt-2 ">
            <div className="col-3 pt-3 text-left">
              <Switch
                checked={isEditMode}
                onChange={(e) => {
                  setIsEditMode(e.target.checked);
                  setDepartmentToCompare("");
                }}
              />
              Edit mode
            </div>

            <div className="col-3 pt-3 text-left">
              <Button disabled={!isEditMode} onClick={addChildNode}variant="contained" color="primary"> {<AddCircleIcon/>}
                Add Child Nodes
              </Button>
            </div>
            <div className="col-3 pt-3 text-left">
              <Button disabled={!isEditMode} onClick={remove} variant="contained" color="secondary"> {<RemoveCircleIcon/>}
                Remove Nodes
              </Button>
            </div>
          </div>

          <div className="row justify-content-center px-5 pt-2 ">
            <input
              type="text"
              placeholder="name"
              value={newNodeName}
              onChange={onNameChange}
            />
            <input
              type="text"
              placeholder="title"
              value={newNodeTitle}
              onChange={onTitleChange}
            />
            <button disabled={!isEditMode} onClick={updateNodes}>
              Update Nodes
            </button>
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
          </div>
        </div>

          <div className="row justify-content-center px-5 pb-4">
            <div
              className={
                ("px-0 text-center",
                departmentToCompare ? "col-6 pl-5 pr-1" : "col-12 px-md-5")
              }
            >
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

            {departmentToCompare && (
              <div className="col-6 px-0 pr-5 text-center">
                <OrganizationChart
                  datasource={chartSourceCompare}
                  chartClass="orgChart"
                  collapsible={false}
                  NodeTemplate={(nodeData) => (
                    <MyNode nodeData={nodeData.nodeData} color="#E6FFF8" />
                  )}
                  onClickNode={
                    !isEditMode
                      ? (nodeData) => {
                          setSelectedNode([nodeData, "#E6FFF8"]);
                          setOpen(true);
                        }
                      : null
                  }
                  pan={true}
                />
              </div>
            )}
            <ShowDetail data={selectedNode} open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
