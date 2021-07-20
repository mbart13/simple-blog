import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

import styles from './Bookmark.module.scss'

const Bookmark = ({ isSaved, handleClick }) => {
  return (
    <button
      className={styles['bookmark-btn']}
      onClick={handleClick}
      aria-live="polite"
    >
      {!isSaved ? <FaRegBookmark /> : <FaBookmark />}{' '}
      {!isSaved ? <span>Save</span> : <span>Saved!</span>}
    </button>
  )
}

export default Bookmark
