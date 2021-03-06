// this section imports all the required elements from other files

import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'; // Redirect is used on line 29 in an if/else


// need for shaping navbar to the left
import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToNewPage: false // when button is clicked, becomes true, redirects to /login
    };
  }
    
    handleSubmit = event => {
      event.preventDefault();
        this.setState({ redirectToNewPage: true })
    }
  

  render() {
    if (this.state.redirectToNewPage) {
      return (
      <Redirect to="/"/>
      )
    } else {
    return (
     <div id = "exp-rep-navbar">
     <h1>
      <div> 
        <img src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" alt="Avatar"  id = "navbar-avatar" />
      </div>
       <ul className = "navbar-ul ">
         {/* links to all major routes. do note that we agreed that for mvp Reports, Inbox, and Logout are all duds. I put settings so that it looks nice.no need to make it do anything, just don't click it.  */}
        <li>
          <Link to = {`/expenses`} id = "expenses" className="navbar-li-a">
            EXPENSES  
          </Link>
        </li>
        <li>
          <Link to = {`/reports`} id = "reports" className = "navbar-li-a">
            REPORTS
          </Link>
        </li>
        <li>
          <Link to = {`/inbox`} id = "inbox" className = "navbar-li-a">
            INBOX
          </Link>
        </li>
        <li>
          <Link to = {`/settings`} id = "settings" className = "navbar-li-a"> 
            SETTINGS
          </Link>
        </li>
        <li>
          <button onClick={this.handleSubmit}>
            LOGOUT
          </button>
        </li>
        <li>
          <Link to = {`/about`} id = "about-receipty" className = "navbar-li-a">
              ReCeipty
          </Link>
        </li>
        
      </ul>
      {/* {function activePageHighlighter(){
        //this function will allow for the active page to be highlighted in green. currently css is set, not active still working on the javascript. Time boxed myself will come back to it after mvp/mvp+
      }} */}
      </h1>
     </div>
     );
    }
  }
}

//  to = {`/logout`} id = "logout" className = "navbar-li-a"

export default NavBar;