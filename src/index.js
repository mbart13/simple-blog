import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'styles/_global.scss'
import 'styles/_reset.scss'
import App from './App'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
