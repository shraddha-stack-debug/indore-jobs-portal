import { useState } from "react";
import axios from "axios";

function AuthPage({setUser}){
    const [isLogin,setIsLogin]=useState(true)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]= useState('')

    const handleSubmit = async ()=>{
        const url =isLogin?'http://localhost:5000/api/auth/login':'http://localhost:5000/api/auth/signup';
        const data=isLogin?{email,password}:{name,email,password};

        try{
            const res = await axios.post(`http://localhost:5000${url}`,data)
            alert(res.data.message);
            localStorage.setItem("user",JSON.stringify(res.data));
            setUser(res.data);
        }catch(err){
            alert(err.response?.data?.error||"Server nhi chal rha h")
        }
    }
    return(
        <div style={{padding:'20px',maxWidth:'350px',margin:'50px auto',border:'1px solid gray'}}>
            <h2>{isLogin?'Sign In':'Sign Up'}</h2>

            {!isLogin && <input placeholder="Full Name" value={name} onChange={e=> setName(e.target.value)}/>}<br/><br/>
            <input placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/><br/><br/>

            <button onClick={handleSubmit}>{isLogin?'Sign In':'Sign Up'}</button>

            <p onClick={()=> setIsLogin(!isLogin)} style={{cursor:'pointer',color:'blue'}}>
                {isLogin ?"Don't have account? Sign Up":"Already have an account? Sign In"}
            </p>
        </div>
    )
}
export default AuthPage;