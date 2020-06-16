import uuid from 'uuid/v1';

export default [
  {
    jobId: 1,
    jobName: 'Accountant',
    jobtask:[
      {id:0,detail:'1preparing accounts and tax returns.',criticaltask:true,knowledge:false,skill:true,attribute:false,isComplete:true},
      {id:1,detail:'1administering payrolls and controlling income and expenditure.',criticaltask:true,knowledge:false,skill:false,attribute:false,isComplete:false},
      {id:2,detail:'1auditing financial information.',criticaltask:false,knowledge:true,skill:true,attribute:true,isComplete:false},
      {id:3,detail:'1compiling and presenting reports, budgets, business plans, commentaries and financial statements.',criticaltask:false,knowledge:true,skill:false,attribute:true,isComplete:false},
      {id:4,detail:'1analysing accounts and business plans',criticaltask:true,knowledge:false,skill:true,attribute:true,isComplete:false},
      {id:5,detail:'1providing tax planning services with reference to current legislation',criticaltask:false,knowledge:true,skill:false,attribute:false,isComplete:false},
      {id:6,detail:'1financial forecasting and risk analysis',criticaltask:false,knowledge:false,skill:true,attribute:false,isComplete:false},
      {id:7,detail:'1dealing with insolvency cases',criticaltask:false,knowledge:false,skill:true,attribute:false,isComplete:false},
    ],
    learningSuggestion:[
      {id:0,detail:'learning suggestion 0',method:1},
      {id:1,detail:'learning suggestion 1',method:2},
      {id:2,detail:'learning suggestion 2',method:3},
      {id:3,detail:'learning suggestion 3',method:2},
      {id:4,detail:'learning suggestion 4',method:3},
      {id:5,detail:'learning suggestion 5',method:2},
      {id:6,detail:'learning suggestion 6',method:1},
      {id:7,detail:'learning suggestion 7',method:1},
    ]
  },
  {
    jobId: 2,
    jobName: 'Maid',
    jobtask:[
      {id:0,detail:'2preparing accounts and tax returns.',criticaltask:true,knowledge:false,skill:true,attribute:false,},
      {id:1,detail:'2administering payrolls and controlling income and expenditure.',criticaltask:true,knowledge:false,skill:false,attribute:false,},
      {id:2,detail:'2auditing financial information.',criticaltask:false,knowledge:true,skill:true,attribute:true,},
      {id:3,detail:'2compiling and presenting reports, budgets, business plans, commentaries and financial statements.',criticaltask:false,knowledge:true,skill:false,attribute:true,},
      {id:4,detail:'2analysing accounts and business plans',criticaltask:true,knowledge:false,skill:true,attribute:true,},
      {id:5,detail:'2providing tax planning services with reference to current legislation',criticaltask:false,knowledge:true,skill:false,attribute:false,},
      {id:6,detail:'2financial forecasting and risk analysis',criticaltask:false,knowledge:false,skill:true,attribute:false,},
      {id:7,detail:'2dealing with insolvency cases',criticaltask:false,knowledge:false,skill:true,attribute:false,},
    ],
    learningSuggestion:[
      {id:0,detail:'learning suggestion 0',method:1},
      {id:1,detail:'learning suggestion 1',method:2},
      {id:2,detail:'learning suggestion 2',method:3},
      {id:3,detail:'learning suggestion 3',method:2},
      {id:4,detail:'learning suggestion 4',method:3},
      {id:5,detail:'learning suggestion 5',method:2},
      {id:6,detail:'learning suggestion 6',method:1},
      {id:7,detail:'learning suggestion 7',method:1},
    ]
  },
  {
    jobId: 3,
    jobName: 'Manager',
    jobtask:[
      {id:0,detail:'3preparing accounts and tax returns.',criticaltask:true,knowledge:false,skill:true,attribute:false,},
      {id:1,detail:'3administering payrolls and controlling income and expenditure.',criticaltask:true,knowledge:false,skill:false,attribute:false,},
      {id:2,detail:'3auditing financial information.',criticaltask:false,knowledge:true,skill:true,attribute:true,},
      {id:3,detail:'3compiling and presenting reports, budgets, business plans, commentaries and financial statements.',criticaltask:false,knowledge:true,skill:false,attribute:true,},
      {id:4,detail:'3analysing accounts and business plans',criticaltask:true,knowledge:false,skill:true,attribute:true,},
      {id:5,detail:'3providing tax planning services with reference to current legislation',criticaltask:false,knowledge:true,skill:false,attribute:false,},
      {id:6,detail:'3financial forecasting and risk analysis',criticaltask:false,knowledge:false,skill:true,attribute:false,},
      {id:7,detail:'3dealing with insolvency cases',criticaltask:false,knowledge:false,skill:true,attribute:false,},
    ]
  },
  {
    jobId: 4,
    jobName: 'Engineer',
    jobtask:[
      {id:0,detail:'4preparing accounts and tax returns.',criticaltask:true,knowledge:false,skill:true,attribute:false,},
      {id:1,detail:'4administering payrolls and controlling income and expenditure.',criticaltask:true,knowledge:false,skill:false,attribute:false,},
      {id:2,detail:'4auditing financial information.',criticaltask:false,knowledge:true,skill:true,attribute:true,},
      {id:3,detail:'4compiling and presenting reports, budgets, business plans, commentaries and financial statements.',criticaltask:false,knowledge:true,skill:false,attribute:true,},
      {id:4,detail:'4analysing accounts and business plans',criticaltask:true,knowledge:false,skill:true,attribute:true,},
      {id:5,detail:'4providing tax planning services with reference to current legislation',criticaltask:false,knowledge:true,skill:false,attribute:false,},
      {id:6,detail:'4financial forecasting and risk analysis',criticaltask:false,knowledge:false,skill:true,attribute:false,},
      {id:7,detail:'4dealing with insolvency cases',criticaltask:false,knowledge:false,skill:true,attribute:false,},
    ]
  },
  {
    jobId: 5,
    jobName: 'Finance',
    jobtask:[
      // {id:0,detail:'preparing accounts and tax returns.',criticaltask:true,knowledge:false,skill:true,attribute:false,},
      // {id:1,detail:'administering payrolls and controlling income and expenditure.',criticaltask:true,knowledge:false,skill:false,attribute:false,},
      // {id:2,detail:'auditing financial information.',criticaltask:false,knowledge:true,skill:true,attribute:true,},
      // {id:3,detail:'compiling and presenting reports, budgets, business plans, commentaries and financial statements.',criticaltask:false,knowledge:true,skill:false,attribute:true,},
      // {id:4,detail:'analysing accounts and business plans',criticaltask:true,knowledge:false,skill:true,attribute:true,},
      // {id:5,detail:'providing tax planning services with reference to current legislation',criticaltask:false,knowledge:true,skill:false,attribute:false,},
      // {id:6,detail:'financial forecasting and risk analysis',criticaltask:false,knowledge:false,skill:true,attribute:false,},
      // {id:7,detail:'dealing with insolvency cases',criticaltask:false,knowledge:false,skill:true,attribute:false,},
    ]
  },
  
];
