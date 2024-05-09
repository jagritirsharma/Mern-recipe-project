import React from 'react'

const Navbar = () => {
  
  return (
    <>
      <div className="nav bg-dark p-2">
       <div className="left"><h2>MERN recipies</h2></div>
       <div className="right">
        <div className="btn btn-primary mx-3">Login</div>
        <div className="btn btn-warning mx-3">Register</div>
        <div className="btn btn-info mx-3">Add</div>
        <div className="btn btn-warning mx-3">Profile</div>
        <div className="btn btn-danger mx-3">Logout</div>
        <div className="btn btn-light mx-3">Saved</div>
       </div>
    </div>
    </>
  )
}
        
          

export default Navbar;