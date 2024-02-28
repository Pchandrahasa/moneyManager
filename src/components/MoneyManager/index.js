import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transaction: [],
    type: transactionTypeOptions[0].optionId,
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      type,
    }

    this.setState(i => ({
      transaction: [...i.transaction, newTransaction],
      title: '',
      amount: '',
    }))
  }

  getExpenses = () => {
    const {transaction} = this.state
    let expensesAmount = 0

    transaction.forEach(i => {
      if (i.type === transactionTypeOptions[1].optionId) {
        expensesAmount += parseFloat(i.amount)
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transaction} = this.state

    let incomeAmount = 0

    transaction.forEach(i => {
      if (i.type === transactionTypeOptions[0].optionId) {
        incomeAmount += parseFloat(i.amount)
      }
    })
    return incomeAmount
  }

  yourBalance = () => {
    const balance = this.getIncome() - this.getExpenses()
    return balance
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  render() {
    const {transaction, type, amount, title} = this.state
    console.log(type)

    return (
      <div className="container">
        <div className="top-section">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <div className="second-section">
          <MoneyDetails
            getIncome={this.getIncome}
            getExpenses={this.getExpenses}
            yourBalance={this.yourBalance}
          />
        </div>

        <div className="transaction-container">
          <div className="add-transaction-container">
            <h1>Add transaction</h1>
            <form className="form" onSubmit={this.onSubmitTransaction}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="Title"
                onChange={this.onChangeTitle}
                value={title}
              />

              <label htmlFor="Amount">Amount</label>
              <input
                type="text"
                id="Amount"
                className="input"
                placeholder="Amount"
                onChange={this.onChangeAmount}
                value={amount}
              />

              <label htmlFor="type">Title</label>
              <select
                type="Type"
                id="title"
                className="input"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(i => (
                  <option key={i.optionId} value={i.optionId}>
                    {i.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="history-container">
            <h1>History</h1>
            <div className="history-card">
              <p>Title</p>
              <p>Amount</p>
              <p>Salary</p>
            </div>
            {transaction.map(i => (
              <TransactionItem transaction={i} key={i.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

// Write your code here
