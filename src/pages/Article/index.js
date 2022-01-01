import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { BiCalendar } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Article.module.scss'
import { fetchComments } from '../../actions/commentsActions'
import { capitalizeFirstLetter } from 'utils/helpers'
import Bookmark from 'components/Bookmark'
import Comments from 'components/Comments'
import Spinner from 'components/Spinner'

const Article = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)
  const { comments, status } = useSelector(state => state.comments)
  const { id } = useParams()
  const post = posts.find(post => post.id === +id)

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  useEffect(() => {
    dispatch(fetchComments(id))
  }, [dispatch, id])

  const renderComments = () => {
    if (status === 'rejected') {
      return <p>Couldn't fetch comments</p>
    }

    if (status === 'idle' || status === 'pending') {
      return <Spinner />
    }

    if (status === 'resolved') {
      return <Comments comments={comments} />
    }
  }

  return (
    <>
      <article className={styles.article}>
        <h2 className={styles['article__title']}>
          {capitalizeFirstLetter(post?.title || '')}
        </h2>
        <div className={styles['article__date']}>
          <BiCalendar />
          <p>July 19, 2021</p>
        </div>
        <figure>
          <img src={`/public/assets/images/${post?.id}.jpg`} alt="" />
          <figcaption className={styles['article__caption']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </figcaption>
        </figure>
        <p className={styles['article__text']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum
          corrupti, excepturi vero magni ex cum, velit tempore nemo quaerat
          vitae nihil dolorem dolores suscipit aliquid reiciendis veniam
          blanditiis omnis, assumenda officiis quas non! Optio numquam similique
          natus voluptatum aperiam voluptas veniam veritatis sed. Incidunt
          mollitia, aliquid sequi hic voluptate aspernatur totam non cumque aut
          adipisci commodi ducimus natus expedita, veritatis quo labore magnam
          reprehenderit blanditiis illum dolores dolor eum sint exercitationem
          a! Labore velit nisi quae deleniti illo. Deleniti odit eos eveniet
          iusto nihil alias reprehenderit consectetur doloremque optio? Odio
          deserunt ex, animi nesciunt accusamus aperiam excepturi voluptatum
          iure nobis? Provident, doloremque voluptatum eos sit distinctio
          veritatis incidunt, at optio nulla consectetur accusantium ducimus
          quas magni voluptatem fuga? Fuga fugit eos provident asperiores eum
          quos beatae modi laudantium nobis laboriosam commodi voluptas,
          adipisci fugiat tempora cupiditate aliquam amet magni cum repellat
          quisquam aliquid sunt obcaecati omnis. Eaque ipsum consequatur, ab
          dolores dolorem sint rerum ratione distinctio perspiciatis aspernatur
          cum iure doloribus culpa voluptas a hic totam doloremque architecto
          repellendus debitis est. Recusandae, mollitia. Veritatis mollitia quia
          accusantium voluptatum! Quos ullam provident nostrum consequuntur
          eaque quae, laborum commodi eligendi soluta nemo. Asperiores possimus
          assumenda, nam illum impedit ullam et architecto?
          <br />
          <br />
          Amet est placerat in egestas erat imperdiet sed euismod. Elementum
          pulvinar etiam non quam. Pharetra convallis posuere morbi leo urna
          molestie. Varius duis at consectetur lorem donec massa. Id semper
          risus in hendrerit gravida rutrum quisque. Adipiscing elit
          pellentesque habitant morbi tristique senectus. Tortor pretium viverra
          suspendisse potenti. Aenean et tortor at risus viverra adipiscing at
          in. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eu
          augue ut lectus arcu bibendum at varius vel pharetra. Facilisis magna
          etiam tempor orci eu. Habitant morbi tristique senectus et. Eu
          facilisis sed odio morbi quis commodo. Ultrices tincidunt arcu non
          sodales neque sodales ut etiam sit. Nulla posuere sollicitudin aliquam
          ultrices sagittis. At imperdiet dui accumsan sit amet nulla. Nec
          feugiat in fermentum posuere urna nec tincidunt praesent semper.
          Tortor id aliquet lectus proin nibh. Tellus at urna condimentum
          mattis.
        </p>
        <Bookmark />
      </article>
      {renderComments()}
    </>
  )
}

export default Article
