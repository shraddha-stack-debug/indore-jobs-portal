const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job: { type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true },
    user:{type: mongoose.Schema.Types.ObjectId,ref:'User',reuired:true},
    appliedAt:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Application',applicationSchema);