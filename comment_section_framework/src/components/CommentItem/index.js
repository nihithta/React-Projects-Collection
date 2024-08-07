import './index.css'

const CommentItem = props => {
  const {commentData, toggleIsLike, onDeleteComment} = props
  const {id, name, comment, isLike, timestamp} = commentData

  const onToggleLike = () => {
    toggleIsLike(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="user-info">
        <div className="avatar">{name[0]}</div>
        <div className="comment-content">
          <div className="user-name">{name}</div>
          <div className="timestamp">{timestamp}</div>
          <div className="comment-text">{comment}</div>
        </div>
      </div>
      <div className="comment-actions">
        <button className="like-button" onClick={onToggleLike}>
          <img
            src={
              isLike
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            alt="like"
          />
        </button>
        <button
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem