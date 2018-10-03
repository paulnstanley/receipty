import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import NavBar from '../navbar/NavBar.js';
import '../app/app.css';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Button 
          className="fixed-action-btn"
          bsStyle="Danger !important" 
          bsSize="large" 
          type="submit"
          id="logout-button"
          >Logout
        </Button>
      </div>
    );
  }
};


export default Logout;
