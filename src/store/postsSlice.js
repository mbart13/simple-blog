import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  status: 'idle',
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: state => {
      state.status = 'pending'
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload
      state.status = 'resolved'
    },
    getPostsFailure: (state, { payload }) => {
      state.status = 'rejected'
      state.error = payload
    },
  },
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions
export const postsSelector = state => state.posts

export default postsSlice.reducer

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1/posts'
      )
      if (!response.ok) {
        const msg = `There was an error "${response.status} ${response.statusText}"`
        throw new Error(msg)
      }
      const data = await response.json()
      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure(error.message))
    }
  }
}
