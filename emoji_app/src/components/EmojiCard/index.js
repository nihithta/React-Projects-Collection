import './index.css'

const EmojiCard = ({emojiDetails, onEmojiClick}) => {
  const {id, emojiName, emojiUrl} = emojiDetails

  return (
    <li className="emoji-card-container" onClick={() => onEmojiClick(id)}>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
