const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Application = require('../models/application');
const user = require('../models/user');
const mongoose  = require('mongoose');
//const job = require('../models/job');
//Get all jobs
router.get('/',async(req,res)=>{
    try{
        const{ search, city, jobType} = req.query; //URl se data lega

        let query = {};

        if(search) query.title = {$regex:search, $options:'i'} //title me search
        if(city) query.city = {$regex:city,$options:'i'} //city me search
        if(jobType)query.jobType = jobType //Full-time

        const jobs = await Job.find(query);
        res.json(jobs);
    } catch(err){
        res.status(500).json({error:err.message});
    }
});

// Post new job
router.post('/',async(req,res)=>{
    try{
        const newJob= new Job(req.body);
        const savedJob = await newJob.save();
       res.status(201).json(savedJob);
    } 
    catch(err){
        res.status(400).json({error:err.message});
    }
});

        //apply wala route
router.post('/:id/apply',async(req,res) => {
    try{
        console.log("Body: ",req.body)
        console.log("Params: ",req.params)
        
        const {userId} =req.body
        const jobId = req.params.id;

        if(!userId) return res.status(400).json({error:"userID missing"})
        if(!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({error:"userID invaild"})
        if(!mongoose.Types.ObjectId.isValid(jobId))return res.status(400).json({error:"JobId invaild"})

            console.log("Ab DB update kar raha...")
        //job me user id push kro
      //  const updatedJob= await Job.findByIdAndUpdate(jobId,{$addToSet:{applicants : userId}
    //  if(!mongoose.Type.ObjectId.isVaild(userId)||!mongoose.Type.ObjectId.isVaild(jobId)){
      //  return res.status(400).json({error:" Invaild userId "})
        
        
       // console.log("Applying: ",userId,jobId)

        //user me jobId push karo
           const application = new Application ({
            job: jobId,
            user: userId
           });
           await application.save();
        res.status(201).json({message:"Application submitted Successfully !"})
    } catch(err){
        console.log("Apply Errror: ",err)
        res.status(500).json({error:err.message})
    }
})


module.exports = router;