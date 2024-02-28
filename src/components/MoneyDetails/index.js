const MoneyDetails = props => {
  const {getIncome, getExpenses, yourBalance} = props
  const income = getIncome()
  const expenses = getExpenses()
  const balance = yourBalance()
  return (
    <>
      <div className="second-cards card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="second-container-img"
          alt="balance"
        />
        <div>
          <p>Your Balance </p>
          <p>Rs {balance}</p>
        </div>
      </div>

      <div className="second-cards card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="second-container-img"
          alt="expenses"
        />
        <div>
          <p>Your Income </p>
          <p>Rs {income}</p>
        </div>
      </div>

      <div className="second-cards card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="second-container-img"
          alt="expenses"
        />
        <div>
          <p>Your Expenses </p>
          <p data-testid="data-testid">Rs {expenses}</p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
