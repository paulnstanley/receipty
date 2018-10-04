// export default [
//     { label: 'Name', name: 'Name' , id: '1'},
//     { label: 'Amount', name: 'Amount', id: '1' },
//     { label: 'Date', name: 'Date', id: '2' },
//     { label: 'Category', name: 'Category', id: '3'},
//     { label: 'Uploaded Receipt Picture', name: 'Uploaded Receipt Picture', id: '4'},
//     { label: 'Comments', name: 'Comments', id: '1'},
// ];

// **************************************************************************
//******************** READ BEFORE CHANGING !!!!!!!!! ********* */
//********* EXPORT DEFAULT NAME: NEEDS TO MATCH  THE EXPENSE MODEL BELOW (WHICH COMES FROM THE EXPENSEROUTES.JS IF YOU WANT DATA TO SAVE -- IT IS CASE SENSITIVE!!!!!!) **** */

//above is commented out because I need to test to make sure that this is the issue i am having with my endpoints post/api/expenses not saving everything 
export default [
    { label: 'Name', name: 'merchant', id: '1' },
    { label: 'Amount', name: 'amount', id: '1' },
    { label: 'Date', name: 'Date', id: '2' },
    { label: 'Category', name: 'category', id: '3' },
    { label: 'Uploaded Receipt Picture', name: 'reciept_img', id: '4' },
    { label: 'Comments', name: 'comments', id: '1' },
];


// let expenseModel = {
//     merchant: request.body.merchant,
//     amount: request.body.amount,
//     category: request.body.category,
//     reciept_img: request.body.reciept_img,
//     comments: request.body.comments,
//     userId: id,
//     reportId: request.body.reportId
// };

//******************************************************************************** */