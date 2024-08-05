import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayImgId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickThumbnail = () => {
    displayImgId(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className={`thumbnail-button ${isActive ? 'active' : ''}`}
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem