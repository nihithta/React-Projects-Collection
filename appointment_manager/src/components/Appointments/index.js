import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
    btnToggle: false,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    if (title && date) {
      const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
      const newAppointment = {
        id: uuidv4(),
        title,
        date: formattedDate,
        isStarred: false,
      }

      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  toggleStarredAppointments = () => {
    this.setState(prevState => ({
      btnToggle: !prevState.btnToggle,
    }))
  }

  render() {
    const {title, date, appointmentsList, btnToggle} = this.state
    const starredButtonClass = btnToggle ? 'unstarred-btn' : 'starred-btn'
    const filteredAppointmentsList = btnToggle
      ? appointmentsList.filter(eachAppointment => eachAppointment.isStarred)
      : appointmentsList

    return (
      <div className="body-container">
        <div className="card-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="top-container">
            <form
              className="comment-form-container"
              onSubmit={this.onAddAppointment}
            >
              <label htmlFor="titleId" className="para">
                TITLE
              </label>
              <input
                id="titleId"
                value={title}
                className="input"
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <br />
              <label htmlFor="dateId" className="para">
                DATE
              </label>
              <input
                id="dateId"
                type="date"
                value={date}
                className="input-comment"
                onChange={this.onChangeDate}
                placeholder="dd/mm/yyyy"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="cover-img"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="bottom-container">
            <div className="appointments-header">
              <h1 className="main-heading">Appointments</h1>
              <button
                type="button"
                className={starredButtonClass}
                onClick={this.toggleStarredAppointments}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-table">
              {filteredAppointmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  toggleIsStarred={this.toggleIsStarred}
                  appointmentData={eachAppointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments