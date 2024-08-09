import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
    count: 0, // Start with 0 comments
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    if (name && comment) {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        timestamp: formatDistanceToNow(new Date(), {addSuffix: true}),
        isLike: false,
      }

      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        count: prevState.count + 1, // Increment count by 1
        name: '',
        comment: '',
      }))
    }
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1, // Decrement count by 1
    }))
  }

  render() {
    const {name, comment, count, commentsList} = this.state
    return (
      <div className="body-container">
        <h1 className="main-heading">Comments</h1>
        <div className="top-container">
          <form className="comment-form-container" onSubmit={this.onAddComment}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              value={name}
              className="input"
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <textarea
              rows="10"
              cols="50"
              value={comment}
              className="input-comment"
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            ></textarea>
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="cover-img"
            alt="comments"
          />
        </div>
        <br />
        <div className="bottom-container">
          <p className="para">
            <span className="comment-count">{count}</span> Comments
          </p>
          <ul className="comments-table">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                toggleIsLike={this.toggleIsLike}
                onDeleteComment={this.onDeleteComment}
                commentData={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments