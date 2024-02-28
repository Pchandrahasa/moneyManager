import './index.css'

const TransactionItem = props => {
  const {transaction} = props
  const {title, amount, type} = transaction

  return (
    <div className="transaction-history-card">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </div>
  )
}

export default TransactionItem
