// this section imports all the required elements from other files

import React, { Component } from "react";

import './navbar.css';

class NavBar extends Component {
 constructor(props) {
   super(props);
  }
   render() {
    return (
     <div id = "exp-rep-navbar">
      
      

      <ul className = "navbar-ul ">
        <li><a className="navbar-li-a-active navbar-li-a">Expenses</a></li>
        <li><a className = "navbar-li-a">Reports</a></li>
        <li><a className = "navbar-li-a">Inbox</a></li>
        <li><a className = "navbar-li-a">Settings</a></li>
        <li><a className = "navbar-li-a">Logout</a></li>
      </ul>

      
     </div>


     );
    }
  }


export default NavBar;