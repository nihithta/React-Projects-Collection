import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {optionId: 'INCOME', displayText: 'Income'},
  {optionId: 'EXPENSE', displayText: 'Expenses'},
]

class MoneyManager extends Component {
  state = {
    transactions: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const amount = parseInt(amountInput)
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount,
      type: optionId,
    }

    this.setState(prevState => {
      const updatedTransactions = [...prevState.transactions, newTransaction]
      const updatedIncome = this.calculateIncome(updatedTransactions)
      const updatedExpenses = this.calculateExpenses(updatedTransactions)
      const updatedBalance = updatedIncome - updatedExpenses

      return {
        transactions: updatedTransactions,
        balanceAmount: updatedBalance,
        incomeAmount: updatedIncome,
        expensesAmount: updatedExpenses,
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
      }
    })
  }

  deleteTransaction = id => {
    this.setState(prevState => {
      const updatedTransactions = prevState.transactions.filter(
        transaction => transaction.id !== id,
      )
      const updatedIncome = this.calculateIncome(updatedTransactions)
      const updatedExpenses = this.calculateExpenses(updatedTransactions)
      const updatedBalance = updatedIncome - updatedExpenses

      return {
        transactions: updatedTransactions,
        balanceAmount: updatedBalance,
        incomeAmount: updatedIncome,
        expensesAmount: updatedExpenses,
      }
    })
  }

  calculateIncome = transactions => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'INCOME' ? acc + transaction.amount : acc
    }, 0)
  }

  calculateExpenses = transactions => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'EXPENSE' ? acc + transaction.amount : acc
    }, 0)
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {
      transactions,
      titleInput,
      amountInput,
      optionId,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state

    return (
      <div className="money-manager">
        <div className="header">
          <h1 className="heading">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your{' '}
            <span style={{color: 'blue', fontWeight: 'bold'}}>
              Money Manager
            </span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="ledger">
          <div className="transaction-form-container">
            <h1 className="heading">Add Transaction</h1>
            <form className="transaction-form" onSubmit={this.addTransaction}>
              <label
                htmlFor="titleId"
                className="welcome-text"
                style={{fontSize: '12px'}}
              >
                TITLE
              </label>
              <input
                type="text"
                id="titleId"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
              <label
                htmlFor="amountId"
                className="welcome-text"
                style={{fontSize: '12px'}}
              >
                AMOUNT
              </label>
              <input
                type="text"
                id="amountId"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />
              <label
                htmlFor="typeId"
                className="welcome-text"
                style={{fontSize: '12px'}}
              >
                TYPE
              </label>
              <select
                id="typeId"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(option => (
                  <option key={option.optionId} value={option.optionId}>
                    {option.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="ledger-list">
            <h1 className="heading">History</h1>
            <ul className="transactions-list">
              <li className="transaction-items">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p></p>
              </li>
              {transactions.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager