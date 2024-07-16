import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchQuery: '',
  }

  handleSearchChange = event => {
    this.setState({
      searchQuery: event.target.value,
    })
  }

  updateSearchQuery = suggestion => {
    this.setState({
      searchQuery: suggestion,
    })
  }

  filteredResults = () => {
    const {searchQuery} = this.state
    const {suggestionsList} = this.props
    return suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  render() {
    const {searchQuery} = this.state
    const filteredSuggestions = this.filteredResults()
    return (
      <div className="google-search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            onChange={this.handleSearchChange}
            placeholder="Enter your search query..."
            value={searchQuery}
            className="search-input"
          />
        </div>
        <ul className="suggestions-list">
          {filteredSuggestions.map(suggestion => (
            <SuggestionItem
              key={suggestion.id}
              resultItem={suggestion}
              updateSearchQuery={this.updateSearchQuery}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions