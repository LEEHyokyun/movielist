import React from 'react'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'

import About from './router/About'
import Home from './router/Home'
import Navigation from './component/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  )
}

export default App;
