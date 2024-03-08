import React from "react";
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="col-sm-2" id="shadow">
  
       <nav class="vertical-nav text-center p-3 pt-2" id="navbar">
                    <ul class="nav flex-column"/>
                     
   
                        <li id="list" className="nav-item active"><Link to='/login' id="link" className="nav-link text-dark ">Login</Link></li>
                        <li id="list" className="nav-item active "><Link to='/signup' id="link" className="nav-link text-dark text-md">Sign up</Link></li>
                        <li id="list" className="nav-item active "><Link to='/' id="link" className="nav-link text-dark text-md">Dashboard</Link></li>
                        <li id="list" className="nav-item active "><Link to='/blog' id="link" className="nav-link text-dark text-md">Blog</Link></li>

                       
                        
                </nav>
    </div>
  );
};

export default Sidebar;
