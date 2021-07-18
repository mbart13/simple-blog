import Header from 'components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Post from 'pages/Post'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
