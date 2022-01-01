import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

import styles from './Bookmark.module.scss'

const Bookmark = ({ isSaved }) => {
  return (
    <button
      className={styles['bookmark-btn']}
      onClick={() => alert('Not implemented')}
      aria-live="polite"
    >
      {!isSaved ? <FaRegBookmark /> : <FaBookmark />}{' '}
      {!isSaved ? <span>Save</span> : <span>Saved!</span>}
    </button>
  )
}

export default Bookmark
