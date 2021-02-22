import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

import ParticlesBG from './components/ParticlesBG'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => (
  <HashRouter>
    <ParticlesBG />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </HashRouter>
)

export default App