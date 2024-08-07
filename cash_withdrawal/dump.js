import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App


* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1e1e30;
  }
  
  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  


  import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  handleWithdraw = amount => {
    this.setState(prevState => ({
      balance: prevState.balance - amount,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-container">
        <div className="profile-container">
          <div className="avatar">S</div>
          <h1 className="username">Sarah Williams</h1>
          <p className="balance-label">Your Balance</p>
          <p className="balance">{balance}</p>
          <p className="balance-currency">In Rupees</p>
          <p className="withdraw-heading">Withdraw</p>
          <p className="withdraw-label">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(denomination => (
              <DenominationItem
                key={denomination.id}
                amount={denomination.value}
                handleWithdraw={this.handleWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

.cash-withdrawal-container {
    background-color: #2c2c54;
    border-radius: 10px;
    padding: 30px;
    width: 300px;
    text-align: center;
    color: #fff;
  }
  
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .avatar {
    background-color: #6c63ff;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .username {
    font-size: 20px;
    margin: 10px 0;
  }
  
  .balance-label,
  .balance-currency {
    margin: 5px 0;
    color: #b3b3b3;
  }
  
  .balance {
    font-size: 30px;
    margin: 5px 0;
  }
  
  .withdraw-heading {
    font-size: 18px;
    margin: 20px 0 10px;
  }
  
  .withdraw-label {
    font-size: 14px;
    margin-bottom: 10px;
    color: #b3b3b3;
  }
  
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  

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

.withdraw-button {
    background-color: #4c4c94;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 60px;
    height: 30px;
    margin: 5px;
    cursor: pointer;
    list-style-type: none;
  }
  
  .withdraw-button:hover {
    background-color: #6c63ff;
  }
  

  aaa