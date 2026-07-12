import { useState } from "react";
import axios from "axios";

function AuthPage({setUser}){
    const [isLogin,setLogin]=useState(true);
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]= useState('')

    const handleSubmit = async ()=>{
        const url =isLogin?'/api/auth/login':'/api/auth/signup';
        const data=isLogin?{email,password}:{name,email,password};

        try{
            const res = await axios.post('http://localhost:5000${url}',data)
            alert(res.data.message);
            localStorage.setItem("userId",res.data.userId);
            setUser(res.data);
        }catch(err){
            alert(err.response.data.error)
        }
    }
    return(
        <div style={{padding:'20px',maxWidth:'350px',margin:'50px auto',border:'1px solid gray'}}>
            <h2>{isLogin?'Sign In':'Sign Up'}</h2>

            {!isLogin && <input placeholder="Full Name" value={name} onChange={e=> setName(e.target.value)}/>}<br/><br/>
            <input placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/><br/><br/>

            <button onClick={handleSubmit}>{isLogin?'Sign In':'Sign Up'}</button>

            <p onClick={()=> setIsLogin(!islogin)} style={{cursor:'pointer',color:'blue'}}>
                {isLogin?"Don't have account? Sign Up":"Already have an account? Sign In"}
            </p>
        </div>
    )
}
export default AuthPage;