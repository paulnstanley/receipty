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
      
      

      <ul>
        <li><a class="active" href="#home">Expenses</a></li>
        <li><a href="#news">Reports</a></li>
        <li><a href="#contact">Inbox</a></li>
        <li><a href="#about">Settings</a></li>
        <li><a href="#about">Logout</a></li>
      </ul>

      
     </div>


     );
    }
  }


export default NavBar;