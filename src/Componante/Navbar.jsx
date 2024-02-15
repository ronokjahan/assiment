import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imge from './../assets/jpg (1).jpg'

const Navbar = () => {
  const navabr=<>
  <div className='' >
  <Link className='' to='/'><button className="btn m-2 btn-success ">Home</button></Link>
  <Link to='/login'><button className="btn btn-active btn-secondary">Login</button></Link>
  <Link to='/regstion'><button className="btn btn-active btn-secondary m-3">singup</button></Link>
  </div>
  </>
    return (
<div  >
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
     
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {navabr}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl uppercase font-bold text-center"><Link to='/'><span className='text-3xl font-semibold'>RezFood</span></Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navabr}
    </ul>
  </div>
 
</div>
</div>
    );
};

export default Navbar;