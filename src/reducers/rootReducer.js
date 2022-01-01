import { combineReducers } from 'redux'
import commentsReducer from './commentsReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
})

export default rootReducer
