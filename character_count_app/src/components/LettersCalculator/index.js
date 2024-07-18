import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    letterCount: 0,
    phraseInput: '',
  }

  onPhraseEnter = event => {
    const phrase = event.target.value
    this.setState({
      phraseInput: phrase,
      letterCount: this.letterCalculation(phrase),
    })
  }

  letterCalculation = phrase => phrase.length

  render() {
    const {letterCount, phraseInput} = this.state

    return (
      <div className="bg-container">
        <div className="details">
          <h1>Calculate the Letters you enter</h1>
          <label for="inputBox">Enter the phrase</label>
          <input
            id="inputBox"
            type="text"
            placeholder="Enter the phrase"
            value={phraseInput}
            onChange={this.onPhraseEnter}
            className="phrase-input"
          />
          <br />
          <p className="count-display">No.of letters: {letterCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator