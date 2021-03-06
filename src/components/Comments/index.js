import styles from './Comments.module.scss'

const Comments = ({ comments }) => {
  if (!comments) return null
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
              <time>July 19, 2021 2:39pm </time>
              <button className={styles['comment__reply-btn']}>Reply</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Comments
