import React from 'react'
import './index.css'

const TransactionItem = ({transaction, deleteTransaction}) => {
  const {id, title, amount, type} = transaction

  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        type="button"
        data-testid="delete"
        onClick={() => deleteTransaction(id)}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem