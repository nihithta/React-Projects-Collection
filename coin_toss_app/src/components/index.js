import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
    resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2) // 0 for heads, 1 for tails

    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        totalCount: prevState.totalCount + 1,
        resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        totalCount: prevState.totalCount + 1,
        resultImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, totalCount, resultImage} = this.state

    return (
      <div className="coin-toss-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="coin-image" />
          <button type="button" onClick={this.tossCoin} className="toss-button">
            Toss Coin
          </button>
          <div className="counts-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss