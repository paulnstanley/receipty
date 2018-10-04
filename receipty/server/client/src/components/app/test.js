// import React from 'react';
// import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
// import './app.css';
// import expenses from './expenses.json';
// import NavBar from '../navbar/NavBar.js';
// import { Button } from "react-bootstrap";


// class Test extends React.Component {
//     lastSelectedIndex = 0;
//     state = {
//         data: expenses.map(dataItem => Object.assign({ selected: false }, dataItem))
//     }

//     selectionChange = (event) => {
//         event.dataItem.selected = !event.dataItem.selected;
//         this.forceUpdate();
//     }

//     rowClick = (event) => {
//         let last = this.lastSelectedIndex;
//         const current = this.state.data.findIndex(dataItem => dataItem === event.dataItem);

//         if (!event.nativeEvent.shiftKey) {
//             this.lastSelectedIndex = last = current;
//         }

//         if (!event.nativeEvent.ctrlKey) {
//             this.state.data.forEach(item => item.selected = false);
//         }
//         const select = !event.dataItem.selected;
//         for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
//             this.state.data[i].selected = select;
//         }
//         this.forceUpdate();
//         console.log(this.state.data[current]);
//     }

//     headerSelectionChange = (event) => {
//         const checked = event.syntheticEvent.target.checked;
//         this.state.data.forEach(item => item.selected = checked);
//         this.forceUpdate();
//     }

//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <div onMouseDown={e => e.preventDefault() /* prevents browser text selection */}>
//                     <Grid
//                         data={this.state.data}
//                         style={{ height: '400px', marginLeft: '100px', textAlign: 'center' }}
//                         selectedField="selected"
//                         textAlign="center"
//                         onSelectionChange={this.selectionChange}
//                         onHeaderSelectionChange={this.headerSelectionChange}
//                         onRowClick={this.rowClick}
//                         resizable
//                         className="expense-table"
//                         >
//                         {/* <Column
//                             field="selected"
//                             width="50px"
//                             className="checkbox"
//                             headerSelectionValue={
//                                 this.state.data.findIndex(dataItem => dataItem.selected === false) === -1
//                              } /> */}
//                         <Column field="Merchant" title="Merchant" width='125px' style={{width: '100px'}} />
//                         <Column field="Date" title="Date" width='75px' style={{width: '75px'}} />
//                         <Column field="Amount" title="Amount" width='100px' style={{width: '100px'}} />
//                         <Column field="Category" title="Category" width='100px' style={{width: '100px'}} />
//                         <Column field="Comments" title="Comments" width='300px' style={{width: '275px'}} />
//                         <Column field="Status" title="Status" width='75px' style={{width: '100px'}} />
//                     </Grid>
//                 </div>
//                 <Button
//                     className="fixed-action-btn"
//                     id="add-to-report"
//                     bsStyle="Success"
//                     bsSize="large"
//                     type="submit"
//                     >Add to Report
//                 </Button>
//             </div>
//         );
//     }
// }
// export default Test;