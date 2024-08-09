import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  incrementTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onStart = () => {
    this.intervalId = setInterval(this.incrementTime, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({
      seconds: 0,
    })
  }

  getFormattedTime = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds

    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    const finalTime = this.getFormattedTime()

    return (
      <div className="stopwatch-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <p className="timer-label">Timer</p>
            <h1 className="timer">{finalTime}</h1>
            <div className="buttons-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
          alt="stopwatch background"
          className="stopwatch-background"
        />
      </div>
    )
  }
}

export default Stopwatch