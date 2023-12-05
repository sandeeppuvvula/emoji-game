// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <div className="navbar-background">
      <div className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navbar-heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-card">
          <p>Score: {currentScore}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
