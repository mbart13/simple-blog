import styles from './BlogPost.module.scss'
import { Link } from 'react-router-dom'
import { BiCalendar } from 'react-icons/bi'

import { capitalizeFirstLetter } from 'utils/helpers'

const BlogPost = ({ post }) => {
  return (
    <article className={styles['blog-post']}>
      <img
        className={styles['blog-post__image']}
        src={`/public/assets/images/${post.id}.jpg`}
        alt=""
      />
      <h2 className={styles['blog-post__title']}>
        {capitalizeFirstLetter(post.title)}
      </h2>
      <div className={styles['blog-post__date']}>
        <BiCalendar style={{ marginRight: '.3rem' }} />
        <p>July 19, 2021</p>
      </div>
      <p className={styles['blog-post__body']}>
        {capitalizeFirstLetter(post.body)}...
      </p>
      <Link to={`/posts/${post.id}`} className={styles['blog-post__button']}>
        Read More
      </Link>
    </article>
  )
}

export default BlogPost
