import { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

import styles from './Bookmark.module.scss'

const Bookmark = () => {
  const [saved, setSaved] = useState(false)

  const handleClick = () => {
    setSaved(prevState => !prevState)
  }
  return (
    <button
      className={styles['bookmark-btn']}
      onClick={handleClick}
      aria-live="polite"
    >
      {!saved ? <FaRegBookmark /> : <FaBookmark />}{' '}
      {!saved ? <span>Save</span> : <span>Saved!</span>}
    </button>
  )
}

export default Bookmark
