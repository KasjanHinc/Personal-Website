import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


const Portfolio = () => {

  let count = 0

  const [loaded, setLoaded] = useState(false)

  const [project, setProject] = useState({
    desc: 'A crypto tracker built with React, Node, Express, MongoDB. Track your favourite crypto by making an account. Mobile responsive.',
    github: 'https://github.com/KasjanHinc/CryptoX',
    live: 'https://cryptox-project.herokuapp.com/'
  })

  const descriptions = [
    {
      desc: 'A crypto tracker built with React, Node, Express, MongoDB. Track your favourite crypto by making an account. Mobile responsive.',
      github: 'https://github.com/KasjanHinc/CryptoX',
      live: 'https://cryptox-project.herokuapp.com/'
    },
    {
      desc: 'A travel web application built with React, Flask, PostgreSQL, JavaScript and Python. Completed within a week by a team of two. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/Horizon',
      live: 'https://horizon-project.herokuapp.com'
    },
    {
      desc: 'A web application built with React, Flask, PostgreSQL, JavaScript and Python. Completed within a week by a team of two. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/442',
      live: 'https://football-map.herokuapp.com'
    },
    {
      desc: 'A grid based game created in under a week using HTML, CSS and JavaScript. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/Snake',
      live: 'https://kasjanhinc.github.io/Snake'
    },
    {
      desc: 'A web application made in React Hooks which consumes the Pixabay API to showcase photos and videos.',
      github: 'https://github.com/KasjanHinc/shutter',
      live: 'https://kasjanhinc.github.io/shutter/'
    },
    {
      desc: 'Made with React Hooks and pure CSS. Time, date, location and weather included. Mobile responsive.',
      github: 'https://github.com/KasjanHinc/Apple-Watch',
      live: 'https://kasjanhinc.github.io/Apple-Watch/'
    },
    {
      desc: 'A web application built with MongoDB, Express, React and Node, completed within a week by a team of four. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/Skii',
      live: 'https://skiresorts.herokuapp.com'
    },
    {
      desc: 'Made with React Hooks, a calculator to show investment stats year by year.',
      github: 'https://github.com/KasjanHinc/Investment-Calculator',
      live: 'https://kasjanhinc.github.io/Investment-Calculator/'
    },
    {
      desc: 'The classic recreated in pure HTML, CSS and JavaScript, without using canvas.The classic recreated in pure HTML, CSS and JavaScript, without using canvas.',
      github: 'https://github.com/KasjanHinc/Pac-Man',
      live: 'https://kasjanhinc.github.io/Pac-Man/'
    },
    {
      desc: 'Two day paired hackathon. Using React, Express and MongoDB we created a Trivia Quiz app based on the OpenTDB API and the Bootstrap framework. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/trivia',
      live: 'https://kasjanhinc.github.io/trivia'
    },
    {
      desc: 'A dice game based on deception re-created in HTML, CSS and pure JavaScript.',
      github: 'https://github.com/KasjanHinc/Liars-Dice',
      live: 'https://kasjanhinc.github.io/Liars-Dice/'
    },
    {
      desc: 'A clone of the iOS calculator. Made with React Hooks and pure JavaScript logic. I tried to replicate the original design as close as possible. Mobile responsive.',
      github: 'https://github.com/KasjanHinc/iOS-Calculator',
      live: 'https://kasjanhinc.github.io/iOS-Calculator/'
    }

  ]

  const handleProject = (index) => {
    count += 1
    const next = {
      desc: descriptions[index].desc,
      github: descriptions[index].github,
      live: descriptions[index].live
    }
    setProject(next)
  }

  useEffect(() => {
    const arrowNext = document.querySelector('.control-next')
    arrowNext.addEventListener('click', handleNext)
    return () => window.removeEventListener('click', handleNext)
  }, [])

  useEffect(() => {
    const arrowPrev = document.querySelector('.control-prev')
    arrowPrev.addEventListener('click', handlePrev)
    return () => window.removeEventListener('click', handlePrev)
  }, [])

  const handleNext = () => {
    const x = count + 1
    const next = {
      desc: descriptions[x].desc,
      github: descriptions[x].github,
      live: descriptions[x].live
    }
    count += 1
    setProject(next)
  }

  const handlePrev = () => {
    const x = count - 1
    const next = {
      desc: descriptions[x].desc,
      github: descriptions[x].github,
      live: descriptions[x].live
    }
    count -= 1
    setProject(next)
  }


  return <div id="portfolio" >

    <div id="portfolio-container">

      <div className={loaded ? 'carousel-wrapper' : 'carousel-wrapper-loading'}>

        <Carousel >

          <div id="project-container" onClick={() => handleProject(0)} >
            <img id="project-image" src="./img/cryptox.png" onLoad={() => setLoaded(true)} />
            <div className="legend">
              <h5 id="project-title" >CryptoX</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(1)} >
            <img id="project-image" src="./img/horizon.png" />
            <div className="legend">
              <h5 id="project-title" >Horizon</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(2)} >
            <img id="project-image" src="./img/442.png" />
            <div className="legend">
              <h5 id="project-title" >442</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(3)} >
            <img id="project-image" src="./img/snake.png" />
            <div className="legend">
              <h5 id="project-title" >Snake</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(4)} >
            <img id="project-image" src="./img/shutter.png" />
            <div className="legend">
              <h5 id="project-title" >Shutter</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(5)} >
            <img id="project-image" src="./img/watch.png" />
            <div className="legend">
              <h5 id="project-title" >Apple Watch</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(6)} >
            <img id="project-image" src="./img/skii.png" />
            <div className="legend">
              <h5 id="project-title" >Skii</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(7)} >
            <img id="project-image" src="./img/invest.png" />
            <div className="legend">
              <h5 id="project-title" >Investment Calculator</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(8)} >
            <img id="project-image" src="./img/pacman.png" />
            <div className="legend">
              <h5 id="project-title" >Pac-Man</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(9)} >
            <img id="project-image" src="./img/trivia.png" />
            <div className="legend">
              <h5 id="project-title" >Trivia</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(10)} >
            <img id="project-image" src="./img/liarsdice.png" />
            <div className="legend">
              <h5 id="project-title" >Liars Dice</h5>
            </div>
          </div>


          <div id="project-container" onClick={() => handleProject(11)} >
            <img id="project-image" src="./img/calc.png" />
            <div className="legend">
              <h5 id="project-title" >iOS Calculator</h5>
            </div>
          </div>

        </Carousel>
      </div>



      <div id="project-desc">

        <Fade appear spy={project.desc}>
          <h2 id="project-text" >{project.desc}</h2>
          <div id="project-btns">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg" ><p className="animated" >GitHub</p></a>
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg" ><p className="animated" >LIVE</p></a>
          </div>
        </Fade>


      </div>

    </div>


  </div>


}

export default Portfolio