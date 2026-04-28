const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalBalance = document.getElementById('total-balance');
const totalIncome = document.getElementById('total-income');
const totalExpense = document.getElementById('total-expense');
const transactionCount = document.getElementById('transaction-count');

let expenses = [];

// Fetch expenses from API
async function fetchExpenses() {
    try {
        const response = await fetch('/api/expenses');
        expenses = await response.json();
        updateUI();
    } catch (error) {
        console.error('Error fetching expenses:', error);
    }
}

// Add expense
expenseForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    const expenseData = { title, amount, category };

    try {
        const response = await fetch('/api/expenses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(expenseData)
        });

        if (response.ok) {
            const newExpense = await response.json();
            expenses.unshift(newExpense);
            updateUI();
            expenseForm.reset();
        }
    } catch (error) {
        console.error('Error adding expense:', error);
    }
});

// Delete expense
async function deleteExpense(id) {
    try {
        const response = await fetch(`/api/expenses/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            expenses = expenses.filter(exp => exp._id !== id);
            updateUI();
        }
    } catch (error) {
        console.error('Error deleting expense:', error);
    }
}

// Update UI
function updateUI() {
    // Update List
    if (expenses.length === 0) {
        expenseList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-receipt"></i>
                <p>No transactions yet. Start adding some!</p>
            </div>
        `;
    } else {
        expenseList.innerHTML = expenses.map((exp, index) => `
            <div class="expense-item" style="animation-delay: ${index * 0.05}s">
                <div class="item-info">
                    <h4>${exp.title}</h4>
                    <p>${exp.category} • ${new Date(exp.date).toLocaleDateString()}</p>
                </div>
                <div class="item-right">
                    <span class="item-amount ${exp.amount >= 0 ? 'pos' : 'neg'}">
                        ${exp.amount >= 0 ? '+' : ''}${exp.amount.toFixed(2)}
                    </span>
                    <button class="delete-btn" onclick="deleteExpense('${exp._id}')">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Update Totals
    const income = expenses
        .filter(exp => exp.amount > 0)
        .reduce((acc, exp) => acc + exp.amount, 0);
    
    const expense = expenses
        .filter(exp => exp.amount < 0)
        .reduce((acc, exp) => acc + exp.amount, 0);
    
    const total = income + expense;

    totalBalance.innerText = `$${total.toFixed(2)}`;
    totalIncome.innerText = `$${income.toFixed(2)}`;
    totalExpense.innerText = `$${Math.abs(expense).toFixed(2)}`;
    transactionCount.innerText = `${expenses.length} item${expenses.length === 1 ? '' : 's'}`;
}

// Initial fetch
fetchExpenses();
