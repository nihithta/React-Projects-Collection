import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: this.props.historyList, // Initialize historyList in state
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  handleDelete = id => {
    const updatedHistoryList = this.state.historyList.filter(
      historyItem => historyItem.id !== id,
    )
    this.setState({historyList: updatedHistoryList})
  }

  filteredHistory = () => {
    const {historyList} = this.state
    const {searchInput} = this.state
    return historyList.filter(historyItem =>
      historyItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {searchInput, historyList} = this.state
    const filteredList = this.filteredHistory()

    return (
      <div className="main-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="search-input"
              placeholder="Search History"
            />
          </div>
        </div>
        <div className="history-container">
          {filteredList.length === 0 && searchInput !== '' ? (
            <p>There is no history to show</p>
          ) : (
            <ul className="history-list">
              {filteredList.map(historyItem => (
                <HistoryItem
                  key={historyItem.id}
                  data={historyItem}
                  onDelete={() => this.handleDelete(historyItem.id)}
                />
              ))}
            </ul>
          )}
          {historyList.length === 0 && <p>There is no history to show</p>}
        </div>
      </div>
    )
  }
}

export default BrowserHistory