import React from 'react'
import {HashRouter, Route} from 'react-router-dom'

import About from './router/About'
import Home from './router/Home'

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;
