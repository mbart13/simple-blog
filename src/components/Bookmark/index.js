import { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import cn from 'classnames'

import styles from './Bookmark.module.scss'

const Bookmark = () => {
  const [saved, setSaved] = useState(false)

  const handleClick = () => {
    setSaved(prevState => !prevState)
  }
  return (
    <button className={cn(styles['bookmark-btn'])} onClick={handleClick}>
      {!saved ? <FaRegBookmark /> : <FaBookmark />}{' '}
      {!saved ? (
        <span>Add to Favorites</span>
      ) : (
        <span>Remove to Favorites</span>
      )}
    </button>
  )
}

export default Bookmark
