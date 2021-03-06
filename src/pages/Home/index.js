import { useSelector } from 'react-redux'
import BlogPost from 'components/BlogPost'
import styles from './Home.module.scss'
import cn from 'classnames'
import Spinner from 'components/Spinner'
import ErrorFallback from 'components/ErrorFallback'

const Home = () => {
  const { posts, status } = useSelector(state => state.posts)

  if (status === 'rejected') {
    return <ErrorFallback />
  }

  if (status === 'idle' || status === 'pending') {
    return <Spinner />
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
