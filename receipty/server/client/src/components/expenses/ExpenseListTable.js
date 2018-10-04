import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import "./ExpenseListTable.css";
import axios from "axios";
import './expenses.json';
import { connect } from 'react-redux';
//imports from actions to get real data
import { fetchExpenses } from '../../actions';

class ExpenseListTable extends Component { 
    constructor(props) {
        super(props);

        // this.state = { selected: {}, selectAll: 0, data: makeData() };
      this.state = { selected: {}, selectAll: 0, data: this.state.data };


      	this.toggleRow = this.toggleRow.bind(this);
    }
    componentDidMount() {
    console.log(this);  
      this.props.fetchExpenses();
    };

    toggleRow(Merchant) {
      const newSelected = Object.assign({}, this.state.selected);
      newSelected[Merchant] = !this.state.selected[Merchant];
      this.setState({
        selected: newSelected,
        selectAll: 2
      });
    }
  
    toggleSelectAll() {
      let newSelected = {};
  
      if (this.state.selectAll === 0) {
        this.state.data.forEach(x => {
          newSelected[x.Merchant] = true;
        });
      }
  
      this.setState({
        selected: newSelected,
        selectAll: this.state.selectAll === 0 ? 1 : 0
      });
    }

    dataToFill() {
      let data = this.props.expenses || this.state.data;

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
                    checked={this.state.selected[original.Merchant] === true}
                    onChange={() => this.toggleRow(original.Merchant)}
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
            //Merchant column

            Header: 'Merchant',
            accessor: 'Merchant',
            maxWidth: 180
          }, {
            //Date column

            Header: 'Date',
            accessor: 'Date',
            maxWidth: 80
          }, {
            //Amount $ column

            Header: 'Amount',
            accessor: 'Amount',
            maxWidth: 60
          }, {
            //Category column

            Header: 'Category',
            accessor: 'Category',
            maxWidth: 100
          }, {
            //Comments column

            Header: 'Comments',
            accessor: 'Comments',
            maxWidth: 350
          }, {
            //Expense status column

            Header: 'Status',
            accessor: 'Status',
            width: 50
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
          <div className="ExpenseListTable">
            <ReactTable
              columns={columns}
              defaultPageSize={dataLength()}
              resizable={false} />
          </div>
        )
    }
}



{/* <div className="ExpenseListTable">
  <ReactTable
    data={makeData()}
    columns={columns}
    defaultPageSize={dataLength()}
    resizable={false} />
</div> */}








// //Make dummy data for table
// function makeData() {

// //   var jimData =[];
// //   //jim's expenses
// // axios.get('https://ps-receipty.herokuapp.com/api/user/5bb26ea977074900150d3ee7/expenses')
// // .then(function (response) {
 
// //   // jimData.push(response.data);
// //   return JSON.stringify(response.data)
  
// // })
// //  return jimData;

//   // this works as is, but want to now make it work with axios

//   return [{
//   Merchant: 'Google',
//   Date: '10/1/18',
//   Amount: '$45',
//   Category: 'Food',
//   Comments: 'Mmm',
//   Status: 'No'
//   },

//   {
//   Merchant: 'AAA',
//   Date: '9/3/18',
//   Amount: '$69',
//   Category: 'Travel',
//   Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//   Status: 'Yes'
//   },

//   {
//   Merchant: 'Duke Energy',
//   Date: '9/5/18',
//   Amount: '$32',
//   Category: 'Utilities',
//   Comments: 'Sure',
//   Status: 'No'
//   },

//   {
//   Merchant: 'AAA',
//   Date: '9/3/18',
//   Amount: '$69',
//   Category: 'Travel',
//   Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//   Status: 'Yes'
//   },

//   {
//   Merchant: 'AAA',
//   Date: '9/3/18',
//   Amount: '$69',
//   Category: 'Travel',
//   Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//   Status: 'Yes'
//   },

//   {
//   Merchant: 'AAA',
//   Date: '9/3/18',
//   Amount: '$69',
//   Category: 'Travel',
//   Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//   Status: 'Yes'
//   },

//   {
//     Merchant: 'Google',
//     Date: '10/1/18',
//     Amount: '$45',
//     Category: 'Food',
//     Comments: 'Mmm',
//     Status: 'No'
//     },
  
//     {
//     Merchant: 'AAA',
//     Date: '9/3/18',
//     Amount: '$69',
//     Category: 'Travel',
//     Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//     Status: 'Yes'
//     },
  
//     {
//     Merchant: 'Duke Energy',
//     Date: '9/5/18',
//     Amount: '$32',
//     Category: 'Utilities',
//     Comments: 'Sure',
//     Status: 'No'
//     },
  
//     {
//     Merchant: 'AAA',
//     Date: '9/3/18',
//     Amount: '$69',
//     Category: 'Travel',
//     Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//     Status: 'Yes'
//     },
  
//     {
//     Merchant: 'AAA',
//     Date: '9/3/18',
//     Amount: '$69',
//     Category: 'Travel',
//     Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//     Status: 'Yes'
//     },
  
//     {
//     Merchant: 'AAA',
//     Date: '9/3/18',
//     Amount: '$69',
//     Category: 'Travel',
//     Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//     Status: 'Yes'
//     },

//     {
//       Merchant: 'Google',
//       Date: '10/1/18',
//       Amount: '$45',
//       Category: 'Food',
//       Comments: 'Mmm',
//       Status: 'No'
//       },
    
//       {
//       Merchant: 'AAA',
//       Date: '9/3/18',
//       Amount: '$69',
//       Category: 'Travel',
//       Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//       Status: 'Yes'
//       },
    
//       {
//       Merchant: 'Duke Energy',
//       Date: '9/5/18',
//       Amount: '$32',
//       Category: 'Utilities',
//       Comments: 'Sure',
//       Status: 'No'
//       },
    
//       {
//       Merchant: 'AAA',
//       Date: '9/3/18',
//       Amount: '$69',
//       Category: 'Travel',
//       Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//       Status: 'Yes'
//       },
    
//       {
//       Merchant: 'AAA',
//       Date: '9/3/18',
//       Amount: '$69',
//       Category: 'Travel',
//       Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//       Status: 'Yes'
//       },
    
//       {
//       Merchant: 'AAA',
//       Date: '9/3/18',
//       Amount: '$69',
//       Category: 'Travel',
//       Comments: 'Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated Lorep Ipsum Catum something repeated',
//       Status: 'Yes'
//       }

// ]
  
// }

 //this maps our state according to expesnse and connects with our fetch Expenses function and exports as Expense List//
function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(ExpenseListTable);