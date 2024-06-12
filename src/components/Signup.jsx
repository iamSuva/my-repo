import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Signup() {
    const [email,setemail]=useState();

    const [firstname,setfirstname]=useState();

    const [lastname,setlastname]=useState();

    const [password,setpassword]=useState();

    const navigate=useNavigate();

    const handlesubmit=async(e)=>{
        e.preventDefault();
        // console.log(email+" "+password);
        const data={
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password
        }
        console.log("sign up data ",data);
        const response=await axios.post("http://localhost:3030/signup",data)
      const result=response.data;
      console.log("singup success ",result);
      if(result)
        {
            alert("sign up successful");
            navigate("/");
        }
     
      
    }
  return (
    <div>
         <div>
        <form className='myform' onSubmit={handlesubmit} >
        <input type="text"  placeholder='Enter the firstname' value={firstname} onChange={(e)=>setfirstname(e.target.value)}required/>
        <input type="text"  placeholder='enter last name' value={lastname} onChange={(e)=>setlastname(e.target.value)} required/>
           <input type="email"  placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
           <input type="password"  placeholder="password"  value={password} onChange={(e)=>setpassword(e.target.value)}required/>
           <button type="submit">Signup</button>
           <Link to="/">login</Link>
        </form>
        
    </div>
    </div>
  )
}

export default Signup