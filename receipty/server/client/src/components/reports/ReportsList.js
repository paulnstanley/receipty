//this page forms the actual list of reports will be a component of reports.js

//required node modules for react
import React, { Component } from 'react';
import { connect } from 'react-redux';

//required background calls and info
import { fetchReports } from '../../actions';

//required css for shaping component
import './reportslist.css';

//table and styling for react table, the main table
import ReactTable from "react-table";
import "react-table/react-table.css";

// component that will list each report out. 
class ReportsList extends Component {
  // componentDidMount() {
  //   this.props.fetchReports();
  // };


  // renderReports() {
  //   return this.props.reports.reverse().map(report => {
  //     return (
  //       <div className="card darken-1" key={report._id}>
  //         <div className="card-content">
  //           <span className="card-title">{report.title}</span>
  //           <p>
  //             {report.body}
  //           </p>
  //           <p className="right">
  //             Sent On: {new Date(report.dateSent).toLocaleDateString()}
  //           </p>
  //         </div>
  //         <div className="card-action">
  //           <a>Yes: {report.yes}</a>
  //           <a>No: {report.no}</a>
  //         </div>
  //       </div>
  //     );
  //   });
  // }
 

  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: 
        {
          name: 'Jason Maurer',
          age: 23,
        }
      },
      {
        name: 'New York City',
        age: 26,
        friend: 
        {
          name: 'Jason Maurer',
          age: 23,
        }
      }

  
    ]
  
    const columns = [
      {
      Header: 'Report Name',
      accessor: 'name' // String-based value accessors!
      }, 
      {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
  
    return (
      <div id = "reports-list-section" >
       {/* {this.renderReports()}  */}
       {/* don't know what this does, so keep it until I figure it out.  */}
      <h1>Reports Landing Page</h1>
    <ReactTable
      data={data}
      columns={columns}
    />
    </div>
    )
  }
}

function mapStateToProps({ reports }) {
  return { reports };
}

export default connect(mapStateToProps, { fetchReports })(ReportsList);
