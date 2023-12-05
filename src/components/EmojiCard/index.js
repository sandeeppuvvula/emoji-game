// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emoji
  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button onClick={onClickEmojiCard} className="button" type="button">
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
