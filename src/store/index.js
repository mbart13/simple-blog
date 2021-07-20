import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import commentsReducer from './commentsSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
  },
})

export default store
