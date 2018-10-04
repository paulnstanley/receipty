import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import "./ExpenseListTable.css";
import { connect } from 'react-redux';
import { fetchExpenses } from '../../actions';
import _ from "lodash";

class ExpenseListTable extends Component { 
    constructor(props) {
        super(props);       
        this.state ={};
      	this.toggleRow = this.toggleRow.bind(this);
    }
    componentDidMount() {
      this.props.fetchExpenses();
    };

    static getDerivedStateFromProps(props, state) {
      return { selected: {}, selectAll: 0, data: props.expenses.expenses };      
    }

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
      let data = this.props.expenses.expenses || this.state.data;
      return data;
    }

    render() {
      console.log(this.props.expenses)
          const columns = [{
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
            maxWidth: 180,
            Cell: props => <span className='Name'>{props.original.merchant}</span>

          }, {
            //Date column

            Header: 'Date',
            accessor: 'Date',
            maxWidth: 80,
            Cell: props => <span className='Date'>{props.original.expenseCreatedDate}</span>

          }, {
            //Amount $ column

            Header: 'Amount',
            accessor: 'Amount',
            maxWidth: 60,
            Cell: props => <span className='Amount'>{props.original.amount}</span>

          }, {
            //Comments column

            Header: 'Comments',
            accessor: 'Comments',
            maxWidth: 350,
            Cell: props => <span className='Comments'>{props.original.comments}</span>

          }
        ]

        return (
          <div className="ExpenseListTable">
            <ReactTable
            data={this.props.expenses}
            columns={columns}
            defaultPageSize={10}
            resolveData={data => data.map(row => row)}/>
          </div>
        )
    }
}

function mapStateToProps({ expenses }) {
  return { expenses };
}

export default connect(mapStateToProps, { fetchExpenses })(ExpenseListTable);