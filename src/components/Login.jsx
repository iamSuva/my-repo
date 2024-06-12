import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
function Login() {
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const navigate=useNavigate();
    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(email+" "+password);
        const data={
            password:password
        }
        const response=await axios.post(`http://localhost:3030/users/${email}/login`,data)
        const result=response.data;
        console.log(result);
        if(result)
            {

              alert("login is successful");
              navigate("/dashboard");
            }
        console.log(response);
    }
  return (
    <div>
        <form className='myform'  onSubmit={handlesubmit}>
           
           <input type="email"  placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
           <input type="password"  placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
           <button type="submit">Login</button>
           <Link to="/signup">signup</Link>
        </form>
    </div>
  )
}

export default Login