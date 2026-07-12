/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path';)

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

// Yahan apna MongoDB ka connection string dalna
mongoose.connect("mongodb://adminuser:nsVNXDHReGu4BOgj@ac-9qnxbo2-shard-00-00.ykphssd.mongodb.net:27017,ac-9qnxbo2-shard-00-01.ykphssd.mongodb.net:27017,ac-9qnxbo2-shard-00-02.ykphssd.mongodb.net:27017/indorejobs?ssl=true&replicaSet=atlas-1a0ej0-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  description: String,
  jobType: String
});

const Job = mongoose.model('Job', JobSchema);

// YE SABSE IMPORTANT ROUTE HAI
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));*/
    


//Website ko Database se connect karne ka server
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(cors()); // CORS
app.use(express.json()); // JSON read karne ke liye
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

// Routes connect
const authRoutes = require('./routes/auth');
app.use('/api/auth',require("./routes/auth")); // <-- ye line sabse zaro
mongoose.connect("mongodb://adminuser:nsVNXDHReGu4BOgj@ac-9qnxbo2-shard-00-00.ykphssd.mongodb.net:27017,ac-9qnxbo2-shard-00-01.ykphssd.mongodb.net:27017,ac-9qnxbo2-shard-00-02.ykphssd.mongodb.net:27017/indorejobs?ssl=true&replicaSet=atlas-1a0ej0-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Atlas Connected ✅"))
.catch(err => console.log("mongodb error", err));

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  description: String,
  jobType: String
});

const Job = mongoose.model('Job', JobSchema);

app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get("/login",(req,res)=>{
     res.sendFile(path.join(__dirname,"public","login.html"));
});

app.get("/signup",(req,res)=>{
     res.sendFile(path.join(__dirname,"public","signup.html"));
});
app.listen(5000,()=>console.log("server running on port 5000"));
//nsVNXDHReGu4BOgj
///1.187.165.55