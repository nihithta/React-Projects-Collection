import './index.css'

const DenominationItem = ({amount, handleWithdraw}) => (
  <li>
    <button
      type="button"
      className="withdraw-button"
      onClick={() => handleWithdraw(amount)}
    >
      {amount}
    </button>
  </li>
)

export default DenominationItem