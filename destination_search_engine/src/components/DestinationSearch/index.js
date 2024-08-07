import React, {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredDestinations = () => {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    return destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {searchInput} = this.state
    const filteredDestinations = this.getFilteredDestinations()

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            className="search-input"
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {filteredDestinations.map(destination => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch