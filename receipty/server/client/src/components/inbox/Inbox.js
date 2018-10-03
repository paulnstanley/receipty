//this file will form the actual expenses page

//required node modules files for functionality
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//component imports
import InboxListTable from './InboxListTable';
import NavBar from '../navbar/NavBar.js';
import { Button } from "react-bootstrap";
import '../inbox/InboxListTable.css';

class Inbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <InboxListTable />
      </div>
    );
  }
};


export default withRouter(Inbox);
