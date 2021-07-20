import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookmarks: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const { id } = action.payload
      const existingIds = state.bookmarks.map(post => post.id)
      if (existingIds.includes(id)) {
        state.bookmarks = state.bookmarks.filter(post => post.id !== id)
        return state
      }
      state.bookmarks.push(action.payload)
    },
  },
})

export const { toggleBookmark } = userSlice.actions

export const bookmarksSelector = state => state.user.bookmarks

export default userSlice.reducer
