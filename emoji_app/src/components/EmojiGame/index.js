import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    isGameOver: false,
    isWon: false,
  }

  shuffleEmojis = emojisList => emojisList.sort(() => Math.random() - 0.5)

  onEmojiClick = id => {
    const {clickedEmojis, score, topScore} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.setState({isGameOver: true, isWon: false})
    } else {
      const newScore = score + 1
      const updatedClickedEmojis = [...clickedEmojis, id]

      if (newScore === emojisList.length) {
        this.setState({
          isGameOver: true,
          isWon: true,
          score: newScore,
          topScore: newScore > topScore ? newScore : topScore,
        })
      } else {
        this.setState({
          score: newScore,
          clickedEmojis: updatedClickedEmojis,
        })
      }
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      isGameOver: false,
      isWon: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isGameOver, isWon} = this.state

    return (
      <div className="emoji-game-container">
        <NavBar isWon={isWon} score={score} topScore={topScore} />
        <div className="emoji-game-body">
          <p className="instruction-text">
            Instructions: Only click the emojis you haven't clicked already!
          </p>
          {isGameOver ? (
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              onClickPlayAgain={this.resetGame}
            />
          ) : (
            <ul className="emoji-grid">
              {this.shuffleEmojis(emojisList).map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emojiDetails={emoji}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
