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