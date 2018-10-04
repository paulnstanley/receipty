import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import "./InboxListTable.css";
import axios from "axios";
import { connect } from 'react-redux';
//imports from actions to get real data
import { fetchReports } from '../../actions';


class InboxListTable extends Component { 
    constructor(props) {
        super(props);

        this.state = { selected: {}, selectAll: 0, data: makeData() };

      	this.toggleRow = this.toggleRow.bind(this);
    }
    componentDidMount() {
    console.log(this);  
      this.props.fetchReports();
    };

    toggleRow(ReportDate) {
      const newSelected = Object.assign({}, this.state.selected);
      newSelected[ReportDate] = !this.state.selected[ReportDate];
      this.setState({
        selected: newSelected,
        selectAll: 2
      });
    }
  
    toggleSelectAll() {
      let newSelected = {};
  
      if (this.state.selectAll === 0) {
        this.state.data.forEach(x => {
          newSelected[x.ReportDate] = true;
        });
      }
  
      this.setState({
        selected: newSelected,
        selectAll: this.state.selectAll === 0 ? 1 : 0
      });
    }

    dataToFill() {
      let data = [];
    //   if props contains reports and if reports HAS data, then data is props.reports
      if(this.props.reports && this.props.reports.length > 0)
        data = this.props.reports;
        else
        data = this.state.data;

        console.log(data);
    
      return data;
    }

    render() {
        
          //Table columns

          const columns = [{

            //Checkbox column

              id: "checkbox",
              accessor: "checkbox",
              Cell: ({ original }) => {
                return (
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={this.state.selected[original.ReportDate] === true}
                    onChange={() => this.toggleRow(original.ReportDate)}
                  />
                );
              },
              Header: x => {
                return (
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={this.state.selectAll === 1}
                    ref={input => {
                      if (input) {
                        input.indeterminate = this.state.selectAll === 2;
                      }
                    }}
                    onChange={() => this.toggleSelectAll()}
                  />
                );
              },
              sortable: false,
              width: 45

          }, {
            //Report Date column

            Header: 'ReportSent',
            accessor: 'reportSentDate',
            maxWidth: 90
          }, {
            //Date column
            Header: 'To',
            accessor: 'sentToOrganization',
            maxWidth: 100
          },
          {
            Header: 'ReportName',
            accessor: 'reportName',
            maxWidth: 190
          }
        ]
        

        //function to prevent empty rows from rendering
        const dataLength = function() {
            if (makeData().length<=10) {
                return makeData().length;
            } else {
                return 10;
            }
        }
    
        return (
          <div className="InboxListTable">
            <ReactTable
            data={this.dataToFill()}
            columns={columns}
            defaultPageSize={dataLength()}
            resizable={false} />
          </div>
        )
    }
}












//Make dummy data for table
function makeData() {

//   var jimData =[];
//   //jim's expenses
// axios.get('https://ps-receipty.herokuapp.com/api/user/5bb26ea977074900150d3ee7/expenses')
// .then(function (response) {
 
//   // jimData.push(response.data);
//   return JSON.stringify(response.data)
  
// })
//  return jimData;

  // this works as is, but want to now make it work with axios

  return [{
  reportSentDate: '10/2/2018',
  sentToOrganization: 'Donut Eaters',
  reportName: 'Donuts'
  }]
  
}

 //this maps our state according to expesnse and connects with our fetch Expenses function and exports as Expense List//
function mapStateToProps({ reports }) {
  return { reports };
}

export default connect(mapStateToProps, { fetchReports })(InboxListTable);