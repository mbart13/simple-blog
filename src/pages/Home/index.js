import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogPost from 'components/BlogPost'

import styles from './Home.modules.scss'
import cn from 'classnames'

const Home = ({ posts }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list" className={cn(styles['articles-list'], 'stack')}>
      {posts.map(post => (
        <li key={post.id}>
          <BlogPost post={post} />
        </li>
      ))}
    </ul>
  )
}

export default Home
