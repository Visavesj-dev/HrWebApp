import uuid from 'uuid/v1';

export default [
  {
    id: 1,
    certificateName: 'Web developer',
    issueBy:'xyz',
    issueDate:'2020-04-1',
    expireDate:'2020-04-1',
    impactLaw:true,
    impactPolicy:false,
    impactCompetency:false,
    attachFile:[
      {fileName:'',fileUrl:''},
    ],
    // status: "Onboarding",
    // department:'Department1',
    // province:'Rayong',
    // address: {
    //   country: 'USA',
    //   state: 'West Virginia',
    //   city: 'Parkersburg',
    //   street: '2849 Fulton Street'
    },
    {
      id: 2,
    certificateName: 'Web developer2',
    issueBy:'xyz',
    issueDate:'2020-04-1',
    expireDate:'2025-04-1',
    impactLaw:true,
    impactPolicy:false,
    impactCompetency:false,
    attachFile:[
      {fileName:'',fileUrl:''},
    ],
    },
    {
      id: 3,
    certificateName: 'AI developer',
    issueBy:'xyz',
    issueDate:'2020-04-1',
    expireDate:'2025-04-1',
    impactLaw:false,
    impactPolicy:true,
    impactCompetency:false,
    attachFile:[
      {fileName:'',fileUrl:''},
    ],
    },
    {
      id: 4,
    certificateName: 'Accountant',
    issueBy:'xyz',
    issueDate:'2020-04-1',
    expireDate:'2021-04-1',
    impactLaw:false,
    impactPolicy:true,
    impactCompetency:false,
    attachFile:[
      {fileName:'',fileUrl:''},
    ],
    }
];
