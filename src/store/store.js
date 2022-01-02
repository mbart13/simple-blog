import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const middleWares = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
)
