// class ExpenseResults extends Components
const userExpenses =[];

export default (async function showResults(values) {
  userExpenses.push(`${JSON.stringify(values)}`);
  console.log(values);
});