
   //Database me data daalne ka script!

const mongoose = require('mongoose');
require('dotenv').config();
const Job = require('./models/job');//model ka path check kar lena

const jobs = [
    { title: "Frontend Developer", company: "TCS Indore", location: "Vijay Nagar", salary :"3-5LPA",type:"Full Time"},
    { title: "Node.js Developer", company: "Infosys Indore",location: "Super corridor",salary: "5-7LPA",type:"Full Time"},
   //
   //  { title: "Web Developer", company: "EngineerBabu", location: "Vijay Nagar", salary: "3-6LPA", type:"Internship"}
];

mongoose.connect(process.env.MONGO_URI)
.then( async()=>{
    await Job.deleteMany({});  //Purana data delete karna 
    await Job.insertMany(jobs);  //New data abb karne ke liye 
    console.log('3 Jobs added to Indore Database');
    process.exit();
})