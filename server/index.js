
     //Website ko Database se connect karne ka server.

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//mongoose connect
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('mongoDB connected'))
    .catch(err=>console.log('DB Error: ',err));

    //Test Route
app.get('/',(req,res)=>{
    res.send('Job Portal API Running');
})
    const jobsRoutes = require('./routes/jobs');
    app.use('/api/jobs', jobsRoutes);

    //Server Start
app.listen(process.env.PORT,()=>{
    console.log(`Server runing on port ${process.env.PORT}`);
})


