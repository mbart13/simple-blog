import { useSelector } from 'react-redux'
import BlogPost from 'components/BlogPost'
import { postsSelector } from 'store/postsSlice'
import styles from './Home.modules.scss'
import cn from 'classnames'

const Home = () => {
  const { posts, status } = useSelector(postsSelector)

  if (status === 'rejected') {
    return <p>Something went wrong</p>
  }

  if (status === 'idle' || status === 'pending') {
    return <p>Loading</p>
  }

  if (status === 'resolved') {
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
}

export default Home
