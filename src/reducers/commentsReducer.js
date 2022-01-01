import * as actions from '../actions/commentsActions'

export const initialState = {
  status: 'idle',
  comments: [],
  error: null,
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, status: 'pending' }
    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        status: 'resolved',
      }
    case actions.GET_COMMENTS_FAILURE:
      return { ...state, status: 'rejected', error: true }
    default:
      return state
  }
}
