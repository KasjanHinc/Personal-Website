import React, { useEffect, useState } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/animations.css'
import './styles/style.css'
import ParticlesBG from './components/ParticlesBG'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

import useMediaQuery from 'react-use-media-query-hook'
import { MediaQuery } from "./MediaQuery"

const App = () => {

  const isMobile = useMediaQuery('(max-width: 767px)')
  const [mediaQuery, setMediaQuery] = useState(isMobile)


  useEffect(() => {
    if (isMobile) setMediaQuery(true)
    else setMediaQuery(false)
  }, [isMobile])


  return (
    <HashRouter>
      <ParticlesBG />
      <Navbar />

      <Route render={({ location }) => (

        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={450} classNames="fade">

            <MediaQuery.Provider value={{ mediaQuery, setMediaQuery }}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </MediaQuery.Provider>

          </CSSTransition>
        </TransitionGroup>

      )} />


    </HashRouter>
  )
}

export default App