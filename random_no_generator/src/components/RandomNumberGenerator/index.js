import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNumber = Math.floor(Math.random() * 100) // Generates a random number between 0 and 100
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p>{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator

