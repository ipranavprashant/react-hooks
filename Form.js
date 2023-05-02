import React, { useState } from 'react'

const Form = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [allEntry,setAllEntry]=useState([]);

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const newEntry={email:email,password:password};
    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        
            <label>Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form