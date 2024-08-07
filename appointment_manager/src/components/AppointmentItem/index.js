import './index.css'

const AppointmentItem = ({appointmentData, toggleIsStarred}) => {
  const {id, title, date, isStarred} = appointmentData

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className={`appointment-item ${isStarred ? 'starred' : ''}`}>
      <div className="appointment-details">
        <p className="appointment-title">{title}</p>
        <p className="appointment-date">{date}</p>
      </div>
      <button
        data-testid="star"
        type="button"
        className="star-button"
        onClick={onClickStar}
      >
        <img
          src={`https://assets.ccbp.in/frontend/react-js/appointments-app/${
            isStarred ? 'filled-star-img.png' : 'star-img.png'
          }`}
          className="star-icon"
          alt="star"
        />
      </button>
    </li>
  )
}

export default AppointmentItem