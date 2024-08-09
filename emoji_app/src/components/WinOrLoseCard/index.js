import './index.css'

const WinOrLoseCard = ({isWon, score, onClickPlayAgain}) => {
  const resultText = isWon ? 'You Won' : 'You Lose'
  const resultImgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-or-lose-card">
      <div className="sub">
        <h1 className="result-text">{resultText}</h1>
        <br />
        <p className="score-text">Best Score</p>
        <p className="score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={resultImgUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
