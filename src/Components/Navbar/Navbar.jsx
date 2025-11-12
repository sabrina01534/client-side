import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const Navbar = () => {
const {user,signOutUser}=use(AuthContext)

const handleSignOut=()=>{
    signOutUser()
    .then((result)=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
}

const links=<>
 <li><NavLink to='/'>Home</NavLink></li>       
    <li><NavLink to='/pets'>Pets &amp; Supplies</NavLink></li>       
    
    {
      user&&<>
      <li><NavLink to='/pages'>Add Listing Page</NavLink></li>
     
      <li><NavLink to='/pages'>My Listings Page</NavLink></li>
      <li><Link to='/pages'>My Orders Page</Link></li>
      </>  
    }

</>

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/dwH4XVW6/download-13.png" />
        </div>
</div>
    <a className="btn btn-ghost text-2xl text-green-600">PawMart</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
 

    {user ?
    <a onClick={handleSignOut} className="btn btn-success">Sign Out </a>:<Link className='text-white-500 btn btn-success p-3 ' to="/login">Login</Link>}
     
   
      {/* <Link to="/login" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</Link> */}
      <Link to="/register" className="text-white-500 btn btn-success p-3">Register</Link>
  </div>
</div>
    );
};

export default Navbar;