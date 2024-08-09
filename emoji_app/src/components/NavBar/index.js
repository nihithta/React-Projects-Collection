import './index.css'

const NavBar = ({isWon, score, topScore}) =>
  isWon ? null : (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      <div className="scores">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )

export default NavBar
