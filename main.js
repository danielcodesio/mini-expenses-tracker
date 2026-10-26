const form = document.getElementById('form-container');
const balance = document.getElementById('balance');
const expenseName = document.getElementById('expenseName')
const amount = document.getElementById('amount');
const addBtn = document.getElementById('add-btn');
const historyList = document.getElementById('expenseList');


function saveExpense() {
    const expenseName = JSON.stringify(expenses);
    localStorage.setItem('expense', expenseName);
};
const expenses = JSON.parse(localStorage.getItem('expense') || '[]');

form.addEventListener('submit', e => {
    e.preventDefault();
    const list = document.createElement('li');
    historyList.append(list);
    list.textContent = `${expenseName.value} - ${amount.value}`;
    expenses.push({
        name: expenseName.value,
        amount: +amount.value
    });
    saveExpense();
    const totalExpenses = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)
    balance.textContent = totalExpenses;
});
