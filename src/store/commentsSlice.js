import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  status: 'idle',
  comments: [],
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: state => {
      state.status = 'pending'
    },
    getCommentsSuccess: (state, { payload }) => {
      state.comments = payload
      state.status = 'resolved'
    },
    getCommentsFailure: (state, { payload }) => {
      state.status = 'rejected'
      state.error = payload
    },
  },
})

export const { getComments, getCommentsSuccess, getCommentsFailure } =
  commentsSlice.actions
export const commentsSelector = state => state.comments

export default commentsSlice.reducer

export function fetchComments(postId) {
  return async dispatch => {
    dispatch(getComments())

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      if (!response.ok) {
        const msg = `There was an error "${response.status} ${response.statusText}"`
        throw new Error(msg)
      }
      const data = await response.json()
      dispatch(getCommentsSuccess(data))
    } catch (error) {
      dispatch(getCommentsFailure(error.message))
    }
  }
}
