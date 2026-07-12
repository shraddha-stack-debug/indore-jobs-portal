import {useState, useEffect} from 'react'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'
import AuthPage from './AuthPage.jsx'

function App(){
  const [jobs, setJobs]=useState([])
  const [user, setUser]=useState(()=>{
    const saved = localStorage.getItem("user")
    return saved? JSON.parse(saved):null
  })
  
  //db se jobs fetch
  useEffect(() =>{
   if(user){ axios.get('http://localhost:5000/api/jobs')
    .then(res =>setJobs(res.data))
    .catch(err => console.log(err))}
  },[user])

    if(!user){
    return <AuthPage setUser={setUser}/>
  }
  //apply function
  const handleApply = async(jobId)=>{
    const userId = user._Id//"6a4b794fcd357c62e6ba260e"

    try{
      await axios.post(`http://localhost:5000/api/jobs/${jobId}/apply`,{userId})
      toast.success("Application Submitted! HR call you soon !")
    }catch(err){
      console.log(err.response?.data)
      toast.error(err.response?.data?.error || "Error in applying")
    }
  }

  
  
  return(
    <div style={{ textAlign: 'center',padding:'50px',fontFamily: 'Arial'}}>
      <Toaster position="top-center" />
      <h1 style={{color: '#2563eb',fontSize: '49px'}}> Indore Jobs </h1>
      <p style={{ fontSize:'20px',color: '#555'}}>
        Best jobs in Indore, only one place
      </p>

      {/* Jobs Cards - Yaha se shuru */}
      <div style={{ marginTop:'50px',display:'flex', gap:'20px',justifyContent:'center',flexWrap:'wrap'}}>
        {jobs.length === 0 ? <p>Loading jobs...</p> : 
          jobs.map(job =>(
            <div key={job._id} className="job-card" 
              style={{border:'1px solid #ddd', padding:'20px', borderRadius:'10px',width:'250px', textAlign:'left'}}
              onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'}
              onMouseLeave={(e) =>e.currentTarget.style.transform='scale(1)'}>
              
              <h3>{job.title}</h3>
              <p>📍 {job.location}</p>
              <p>💰 {job.salary}</p>
              
              
              <button style={{padding:'8px 15px',backgroundColor:'#10b981',color:'white',border:'none',borderRadius:'5px',cursor:'pointer'}}
                onClick={() => handleApply(job.jobId)}>
                Apply
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default App
