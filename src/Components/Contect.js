import React from 'react'
 
export default function Contact() {
  return (
    <div> 
    <h1>Contact Us Page</h1>
       
       <h3>It fields requests to places people might be able to find answers </h3>
       <form class ="row g-3">
 <div className="col-md-6">
   <label for="inputEmail4"className="form-label">Email</label>
   <input type="email"className="form-control" id="inputEmail4"/>
 </div>
 <div className="col-md-6">
   <label for="inputPassword4"className="form-label">Password</label>
   <input type="password"className="form-control" id="inputPassword4"/>
 </div>
 
  
  
 <div className="col-md-2">
   <label for="inputZip"className="form-label">Confirm Password</label>
   <input type="text"className="form-control" id="inputZip"/>
 </div>
  
 <div className="col-12">
   <button type="submit"className="btn btn-primary">Sign in</button>
 </div>
 </form>
</div>
 
  
  )
  }

