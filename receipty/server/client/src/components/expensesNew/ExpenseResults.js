const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// class ExpenseResults extends Components
const userExpenses =[];

export default (async function showResults(values) {
  await sleep(500);
  userExpenses.push(`${JSON.stringify(values)}`);
  console.log(values);
});