const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title:{ type:String, required:true},
    company:{ type:String, required:true},
    location:{type:String, default:'Indore'},
    salary:{type:String},
    description:{type:String}, 
    postedBy:{type:String},
    createdAt:{type:Date,default:Date.now},
});

module.exports=mongoose.model('job', JobSchema);
