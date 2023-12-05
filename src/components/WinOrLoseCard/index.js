// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, emojisList, clickedEmojisList, onClickPlayAgain} = props
  const isWon = emojisList.length === clickedEmojisList.length
  return (
    <div className="game-result-container">
      <div className="game-result">
        <h1 className="game-status">{isWon ? 'You Won' : 'You Lose'}</h1>
        <p className="score-status">{isWon ? 'Best Score' : 'score'}</p>
        <p className="score">{score}/12</p>
        <button
          onClick={onClickPlayAgain}
          type="button"
          className="play-again-btn"
        >
          Play Again
        </button>
      </div>
      <div>
        {isWon ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="Win or Lose"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="Win or Lose"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
