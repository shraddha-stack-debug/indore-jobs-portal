import { useState,useEffect } from "react"
import axios from'axios'
import { Toaster,toast } from "react-hot-toast"

function JobsPages(){
    const[jobs,setjobs] = useState([])

    //1. Jobs fetch karna
    useEffect(() =>{
        axios.get('http://localhost:5000/api/jobs')
        .then(res => setjobs(res.data))
    },[])

    //2.Apply wala function
    const handleApply = async(jobId)=>{
        const userId = "6a4b794fcd357c62e6ba260e" 

        try{
            await axios.post('http://localhost:5000/api/jobs/${jobId}/apply',{userId})
            toast.success("Application Submitted Successfully..")
        } catch(err){
            console.log("frontend error: ",err.respons?.data)
            toast.error("Error in applying..")
        }
    }

    return(
        <div>
            <Toaster position="top-center">{}</Toaster>
            <h1>All Jobs</h1>
            {jobs.map(job => (
                <div key={job._id} style={{border:'1px solid gray', margin:'10px',padding:'10px'}}>
                    <h3>{job.title}</h3>
                    <p>{job.company}-{job.city}</p>
                    <button onClick={()=> handleApply(job._id)}>
                        Apply Now
                    </button>
                    </div>
            ))}
        </div>
    )
}
export default JobsPages