import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timerLimit: 25,
    isTimerRunning: false,
    timeRemaining: 25 * 60,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  toggleTimer = () => {
    const {isTimerRunning} = this.state

    if (isTimerRunning) {
      clearInterval(this.intervalId)
    } else {
      this.intervalId = setInterval(this.decrementTime, 1000)
    }

    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  decrementTime = () => {
    this.setState(prevState => {
      const timeRemaining = prevState.timeRemaining - 1

      if (timeRemaining === 0) {
        clearInterval(this.intervalId)
        return {
          isTimerRunning: false,
          timeRemaining: 0,
        }
      }

      return {timeRemaining}
    })
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({
      timerLimit: 25,
      isTimerRunning: false,
      timeRemaining: 25 * 60,
    })
  }

  incrementTimerLimit = () => {
    this.setState(prevState => ({
      timerLimit: prevState.timerLimit + 1,
      timeRemaining: (prevState.timerLimit + 1) * 60,
    }))
  }

  decrementTimerLimit = () => {
    this.setState(prevState => ({
      timerLimit: prevState.timerLimit > 1 ? prevState.timerLimit - 1 : 1,
      timeRemaining: (prevState.timerLimit - 1) * 60,
    }))
  }

  getFormattedTime = () => {
    const {timeRemaining} = this.state
    const minutes = Math.floor(timeRemaining / 60)
    const seconds = timeRemaining % 60

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    const {timerLimit, isTimerRunning} = this.state
    const startPauseText = isTimerRunning ? 'Pause' : 'Start'
    const timerStatus = isTimerRunning ? 'Running' : 'Paused'
    const startPauseIcon = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const iconAltText = isTimerRunning ? 'pause icon' : 'play icon'

    return (
      <div className="timer-container">
        <h1 className="timer-title">Digital Timer</h1>
        <div className="timer-display">
          <img
            src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
            alt="timer background"
            className="timer-bg"
          />
          <div className="timer-content">
            <h1 className="timer-time">{this.getFormattedTime()}</h1>
            <p className="timer-status">{timerStatus}</p>
          </div>
        </div>
        <div className="controls">
          <div className="buttons">
            <button
              type="button"
              className="control-button"
              onClick={this.toggleTimer}
            >
              <img src={startPauseIcon} alt={iconAltText} className="icon" />
              {startPauseText}
            </button>
            <button
              type="button"
              className="control-button"
              onClick={this.resetTimer}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="icon"
              />
              Reset
            </button>
          </div>
          <div className="timer-limit">
            <p>Set Timer limit</p>
            <div className="limit-controls">
              <button
                type="button"
                className="limit-button"
                onClick={this.decrementTimerLimit}
                disabled={isTimerRunning}
              >
                -
              </button>
              <p className="limit-value">{timerLimit}</p>
              <button
                type="button"
                className="limit-button"
                onClick={this.incrementTimerLimit}
                disabled={isTimerRunning}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer