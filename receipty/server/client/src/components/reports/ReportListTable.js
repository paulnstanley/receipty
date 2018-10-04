import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import "./ReportListTable.css";
import { connect } from 'react-redux';
//imports from actions to get real data
import { fetchReports } from '../../actions';

class ReportListTable extends Component { 
    constructor(props) {
        super(props);

        this.state = { selected: {}, selectAll: 0, data: makeData() };

      	this.toggleRow = this.toggleRow.bind(this);
    }
    componentDidMount() {
    console.log(this);  
      this.props.fetchReports();
    };

    toggleRow(Name) {
      const newSelected = Object.assign({}, this.state.selected);
      newSelected[Name] = !this.state.selected[Name];
      this.setState({
        selected: newSelected,
        selectAll: 2
      });
    }
  
    toggleSelectAll() {
      let newSelected = {};
  
      if (this.state.selectAll === 0) {
        this.state.data.forEach(x => {
          newSelected[x.Name] = true;
        });
      }
  
      this.setState({
        selected: newSelected,
        selectAll: this.state.selectAll === 0 ? 1 : 0
      });
    }

    dataToFill() {
      let data = this.props.reports || this.state.data;

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
                    checked={this.state.selected[original.Name] === true}
                    onChange={() => this.toggleRow(original.Name)}
                  />
                );
              },
              Header: () => {
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
            //Name column

            Header: 'Name',
            accessor: 'Name',
          }, {
            // Amount column

            Header: 'Amount',
            accessor: 'Amount'
          }, {
            //Organization column

            Header: 'Organization',
            accessor: 'Organization'
          }, {

            Header: 'Comments',
            accessor: 'Comments'
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
          <div className="ReportListTable">
            <ReactTable
            data={makeData()}
            columns={columns}
            defaultPageSize={dataLength()}
            resizable={false} />
          </div>
        )
    }
}

function makeData() {
    return [
        {
        Name: "Sean",
        Amount: "$69",
        Organization: "Your mom's house",
        Comments: "Hello"
      }
    ]
}
function mapStateToProps({ reports }) {
    return { reports };
  }
  
  export default connect(mapStateToProps, { fetchReports })(ReportListTable);