import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Home from 'pages/Home'
import Article from 'pages/Article'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" exact>
            <Home posts={posts} />
          </Route>
          <Route path="/posts/:id">
            <Article posts={posts} />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
