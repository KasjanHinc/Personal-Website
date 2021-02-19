import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Typed from 'react-typed'


const Home = () => {


  return <div id="landing" >


    <div id="landing-container">


      <Fade delay={200}>
        <p id="intro-welcome">
          <Typed
            strings={['Hello,', 'नमस्ते,', 'Cześć,', 'Bonjour,', 'Olá,', '<span dir=\'rtl\'>مرحبا</span>']}
            typeSpeed={120}
            backSpeed={100}
            loop >
          </Typed>
           my name is
        </p>
      </Fade>

      <Fade up delay={700}>
        <h1 id="intro" >Kasjan Hinc</h1>
      </Fade>
      <Fade up delay={1200}>
        <p id="intro-lower">Junior Software Developer • Frontend • Backend<br />Based in
          <strong> London</strong></p>
      </Fade>
      <Fade delay={1800}>
        <Link to="/about" className="btn btn-outline-light btn-lg"><p className="animated" >ABOUT</p></Link>
      </Fade>

    </div>


  </div>



}

export default Home