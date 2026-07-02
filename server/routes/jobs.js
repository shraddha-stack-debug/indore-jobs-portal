const express = require('express');
const router = express.Router();
const job = require('../models/job');

//Get all jobs
router.get('/',async(req,res)=>{
    try{
        const jobs = await job.find();
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

module.exports = router;