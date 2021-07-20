import React from 'react'
import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa'

import styles from './Comments.module.scss'

const Comments = ({ comments }) => {
  return (
    <section className={styles['comments-section']}>
      <h3 className={styles['comments-section__heading']}>
        {comments.length === 1 ? '1 comment' : `${comments.length} Comments`}
      </h3>

      <ul className={styles['comments']}>
        {comments.map(comment => (
          <li key={comment.id} className={styles['comment']}>
            <div>
              <h4>{comment.email}</h4>
            </div>
            <p className={styles['comment__body']}>{comment.body}</p>
            <div className={styles['comment__footer']}>
              <time>July 219, 2021 2:39pm </time>
              <button className={styles['comment__reply-btn']}>Reply</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Comments
