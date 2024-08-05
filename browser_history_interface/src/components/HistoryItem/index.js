import './index.css'

const HistoryItem = ({data, onDelete}) => {
  const {timeAccessed, logoUrl, title, domainUrl} = data

  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo-image" />
      <p className="app-title">{title}</p>
      <p>{domainUrl}</p>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem