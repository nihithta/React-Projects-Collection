import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  goToPreviousReview = () => {
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex > 0
          ? prevState.activeIndex - 1
          : prevState.activeIndex,
    }))
  }

  goToNextReview = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex < reviewsList.length - 1
          ? prevState.activeIndex + 1
          : prevState.activeIndex,
    }))
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} =
      reviewsList[activeIndex]
    return (
      <div className="body-container">
        <h1>Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow"
            onClick={this.goToPreviousReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-card">
            <img src={imgUrl} alt={username} className="profile-img" />
            <p className="heading">{username}</p>
            <p className="para">{companyName}</p>
            <p className="para">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="arrow"
            onClick={this.goToNextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel