import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../actions/postsActions'

export const initialState = {
  status: 'idle',
  posts: [],
  error: null,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        status: 'pending',
      }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        status: 'resolved',
        posts: action.payload,
      }
    case GET_POSTS_FAILURE:
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      }
    default:
      return state
  }
}

export default postsReducer
