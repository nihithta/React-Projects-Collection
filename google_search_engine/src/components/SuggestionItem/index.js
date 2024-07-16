import './index.css'

const SuggestionItem = ({resultItem, updateSearchQuery}) => {
  const {suggestion} = resultItem

  const handleArrowClick = () => {
    updateSearchQuery(suggestion)
  }

  return (
    <li className="list-props">
      <div className="list-item">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="search-arrow"
          onClick={handleArrowClick}
        />
      </div>
    </li>
  )
}

export default SuggestionItem