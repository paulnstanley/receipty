import React, { Component } from 'react';
import "./InboxListTable.css";
import axios from "axios";
import { connect } from 'react-redux';
//imports from actions to get real data
import { fetchMessages } from '../../actions';


class InboxListTable extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }


    renderList() {
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
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      );
    }
  }
  
  function mapStateToProps(state) {
    console.log(state);
    return {
      messages: state.messages
    };
  }





export default connect(mapStateToProps, { fetchMessages })(InboxListTable);