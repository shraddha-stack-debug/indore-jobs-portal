function App(){
  return(
    <div style={{ textAlign: 'center',padding:'50px',fontFamily:'Arial'}}>
      <h1 style={{color:'#2563eb',fontSize:'49px'}}> Indore Jobs</h1>
      <p style={{ fontSize:'20px',color:'#555'}}>
        Best jobs in Indore, only one place 
      </p>
      <button style={{
        padding:'15px 30px',
        fontsize:'18px',
        backgroundColor:'#2563eb',
        color:'white',
        border:'none',
        borderRadius: '8px',
        cursor:'pointer'
      }}>
        See Jobs
      </button>

      <div style={{ marginTop:'50px',display:'flex', gap:'20px',justifyContent:'center',flexWrap:'warp'}}>

        <div className="job-card" style={{border:'1px solid #ddd', padding:'20px', borderRadius:'10px',width:'250px', textAlign:'left'}}
                    onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'}
                    onMouseLeave={(e) =>e.currentTarget.style.transform='scale(1)'}>
        
          <h3> Receptionist</h3>
          <p> 📍 Vijay Nagar,Indore</p>
          <p>💸 12,000 - 15,000/month</p>
          <button style={{padding:'8px 15px',backgroundColor:'#10b981',color:'white',border:'none',borderRedius:'5px',cursor:'pointer'}}
                            onClick={()=>alert('Application sent! HR will call you soon')}>
                          Apply</button>
        </div>

        <div style={{border:'1px solid #ddd', padding:'20px', borderRadius:'10px',width:'250px', textAlign:'left',transition:'0.35',cursor:'pointer'}}
                    onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'}
                    onMouseLeave={(e) =>e.currentTarget.style.transform='scale(1)'}>
          <h3> Data Entry</h3>
          <p> 📍 Palasia,Indore</p>
          <p>💸 10,000 - 12,000/month</p>
          <button style={{padding:'8px 15px',backgroundColor:'#10b981',color:'white',border:'none',borderRedius:'5px',cursor:'pointer'}}
                         onClick={()=>alert('Application sent! HR will call you soon')}>
                          Apply</button>
        </div>

        <div style={{border:'1px solid #ddd', padding:'20px', borderRadius:'10px',width:'250px', textAlign:'left'}}
                    onMouseEnter={(e) => e.currentTarget.style.transform='scale(1.05)'}
                    onMouseLeave={(e) =>e.currentTarget.style.transform='scale(1)'}>
          <h3>Sales Executive</h3>
          <p> 📍 Vijay Nagar,Indore</p>
          <p>💸 15,000 - 18,000/month</p>
          <button style={{padding:'8px 15px',backgroundColor:'#10b981',color:'white',border:'none',borderRedius:'5px',cursor:'pointer'}}
                          onClick={()=>alert('Application sent! HR will call you soon')}>
                          Apply</button>
        </div>

      </div>
    </div>
  )
}
export default App