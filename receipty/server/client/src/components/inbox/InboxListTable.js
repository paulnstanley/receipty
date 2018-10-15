import React, { Component } from 'react';
import "./InboxListTable.css";
import axios from "axios";
import { connect } from 'react-redux';
//imports from actions to get real data
import { fetchMessages } from '../../actions';


class InboxListTable extends Component {
  constructor(props){
    super(props)
    
  }
    componentDidMount() {
        this.props.fetchMessages();
    }


    renderList() {
      console.log(this.props.messages)
      return this.props.messages.map(message => {
        return (

          <li 
            key={message._id}
            className="list-group-item">
            {message.message}
            Created: {message.createdDate}
            Status Type: {message.type}
          </li>

        );
      });
    }
  
    render() {
      return (
        <ul>

        <li 
            
            key="3"
            className="list-group-item"><span>You have a new report to view </span>
            {/* Status Type: {"report"} */}
            
              <button className="button-style" >Approve</button>
            
            <button className="button-style">Reject</button>
            Created: {"10/23/18"}
          </li>
        </ul>
      );
    }
  }
  
  const mapStateToProps = ({messages}) => {
    return {messages};
  }





export default connect(mapStateToProps, { fetchMessages })(InboxListTable);

{/* <li 
key={message._id}
className="list-group-item">
{message.message}
Created: {message.createdDate}
Status Type: {message.type}
</li> */}