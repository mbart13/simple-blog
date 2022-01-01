import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

const middleWares = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleWares))
