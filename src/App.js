import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './actions/postsActions'
import Header from 'components/Header'
import Home from 'pages/Home'
import Article from 'pages/Article'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/posts/:id">
            <Article />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
