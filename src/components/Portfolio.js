import React, { useState, useContext } from 'react'
import Fade from 'react-reveal/Fade'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { MediaQuery } from '../MediaQuery'
import Tilt from 'react-tilt'


const Portfolio = () => {

  // GLOBAL MEDIA QUERY FOR REMOVING TILT FEATURE ON MOBILE DEVICES
  const { mediaQuery, setMediaQuery } = useContext(MediaQuery)
  // ONLY LOAD THE CAROUSEL IF IMAGE OF FIRST PROJECT IS LOADED
  const [loaded, setLoaded] = useState(false)

  const [project, setProject] = useState({
    title: 'CryptoX',
    desc: 'A crypto tracker built with React, Node, Express, MongoDB. Track your favourite crypto by making an account. Mobile responsive.',
    github: 'https://github.com/KasjanHinc/CryptoX',
    live: 'https://cryptox-project.herokuapp.com/'
  })

  // Absolute file path option for images, GitHub pages needs this
  const imagePath = process.env.NODE_ENV === 'development' ? './img/' : './src/img/'

  const descriptions = [
    {
      title: 'CryptoX',
      desc: 'A crypto tracker built with React, Node, Express and MongoDB. Track your favourite crypto by making an account. Mobile responsive.',
      github: 'https://github.com/KasjanHinc/CryptoX',
      live: 'https://cryptox-project.herokuapp.com/'
    },
    {
      title: 'Horizon',
      desc: 'A travel web application built with MongoDB, Express, React and Node. Working with a REST Countries API and Skyscanner widgets.',
      github: 'https://github.com/KasjanHinc/Horizon',
      live: 'https://horizon-project.herokuapp.com'
    },
    {
      title: '442',
      desc: 'A football themed web application built with React, Flask, PostgreSQL, JavaScript and Python. Completed within a week by a team of two. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/442',
      live: 'https://football-map.herokuapp.com'
    },
    {
      title: 'Snake',
      desc: 'A grid based snake game created in under a week using HTML, CSS and JavaScript. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/Snake',
      live: 'https://kasjanhinc.github.io/Snake'
    },
    {
      title: 'Shutter',
      desc: 'A web application made with React Hooks that consumes the Pixabay API to showcase photos and videos.',
      github: 'https://github.com/KasjanHinc/shutter',
      live: 'https://kasjanhinc.github.io/shutter/'
    },
    {
      title: 'Giphy',
      desc: 'Landing page of Giphy.com recreated in React and TypeScript, consumes the Giphy API',
      github: 'https://github.com/KasjanHinc/Giphy',
      live: 'https://kasjanhinc.github.io/Giphy/'
    },
    {
      title: 'Skii',
      desc: 'A skiing web application built with MongoDB, Express, React and Node. Completed within a week by a team of four. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/Skii',
      live: 'https://skiresorts.herokuapp.com'
    },
    {
      title: 'Investment Calculator',
      desc: 'Made with React Hooks, a calculator to show investment stats year by year.',
      github: 'https://github.com/KasjanHinc/Investment-Calculator',
      live: 'https://kasjanhinc.github.io/Investment-Calculator/'
    },
    {
      title: 'Pac-Man',
      desc: 'The classic recreated in pure HTML, CSS and JavaScript, without using canvas.',
      github: 'https://github.com/KasjanHinc/Pac-Man',
      live: 'https://kasjanhinc.github.io/Pac-Man/'
    },
    {
      title: 'Trivia',
      desc: 'Two day paired hackathon. Using React, Express and MongoDB we created a Trivia Quiz app based on the OpenTDB API and the Bootstrap framework. Part of the General Assembly Software Engineering Immersive bootcamp.',
      github: 'https://github.com/KasjanHinc/trivia',
      live: 'https://kasjanhinc.github.io/trivia'
    },
    {
      title: 'iOS Calculator',
      desc: 'A clone of the iOS calculator, made with React Hooks and vanilla JavaScript ES6 logic and CSS. Mobile responsive.',
      github: 'https://github.com/KasjanHinc/iOS-Calculator',
      live: 'https://kasjanhinc.github.io/iOS-Calculator/'
    },
    {
      title: 'Liars Dice',
      desc: 'A dice game based on deception re-created in HTML, CSS and vanilla JavaScript ES6.',
      github: 'https://github.com/KasjanHinc/Liars-Dice',
      live: 'https://kasjanhinc.github.io/Liars-Dice/'
    },
    {
      title: 'Hotel Cart',
      desc: 'A hotel room booking checkout cart created in React and mockapi.io.',
      github: 'https://github.com/KasjanHinc/Hotels-Cart',
      live: 'https://kasjanhinc.github.io/Hotels-Cart/'
    },
    {
      title: 'TeamSQL',
      desc: 'An employee search tool, made with React, Flask, SQLAlchemy, PostgreSQL and Python.',
      github: 'https://github.com/KasjanHinc/TeamSQL',
      live: 'https://team-sql.herokuapp.com/'
    },
    {
      title: 'Apple Watch',
      desc: 'Custom watch screen made with React Hooks and pure CSS. Time, date, location and weather included. Mobile responsive.',
      github: 'https://github.com/KasjanHinc/Apple-Watch',
      live: 'https://kasjanhinc.github.io/Apple-Watch/'
    }


  ]

  // HANLDE THE NEXT SLIDE FROM THE EVENT VALUE OF THE CAROUSEL
  const handleSlide = (event) => {

    const next = {
      title: descriptions[event].title,
      desc: descriptions[event].desc,
      github: descriptions[event].github,
      live: descriptions[event].live
    }

    // SET THE NEW PROJECT ON THE CAROUSEL
    setProject(next)
  }


  return (

    <div className="portfolio page">

      <div id="portfolio-container">

        <div className={loaded ? 'carousel-wrapper' : 'carousel-wrapper-loading'}>

          <Fade spy={loaded}>

            <Carousel showThumbs={false} useKeyboardArrows={true} swipeable={true} interval={12000} autoPlay={true} infiniteLoop={true} showStatus={false} onChange={handleSlide}>

              <div id="project-container" >
                <img id="project-image" src={`${imagePath}cryptox.png`} onLoad={() => setLoaded(true)} />
              </div>

              <div id="project-container" >
                <img id="project-image" src={`${imagePath}horizon.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}442.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}snake.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}shutter.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}giphy.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}skii.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}invest.png`} />
              </div>

              <div id="project-container" >
                <img id="project-image" src={`${imagePath}pacman.png`} />
              </div>

              <div id="project-container" >
                <img id="project-image" src={`${imagePath}trivia.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}calc.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}liarsdice.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}hotels-cart.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}teamsql.png`} />
              </div>

              <div id="project-container"  >
                <img id="project-image" src={`${imagePath}watch.png`} />
              </div>

            </Carousel>

          </Fade>

        </div>

        {loaded && <div id="project-desc">

          <Fade appear spy={project}>
            <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
              <h2 id="project-title" >{project.title}</h2>
              <h5 id="project-text" >{project.desc}</h5>
              <div id="project-btns">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-lg" ><p className="animated" >GitHub</p></a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-lg" ><p className="animated" >LIVE</p></a>
              </div>
            </Tilt>
          </Fade>

        </div>}

      </div>

    </div>

  )

}

export default Portfolio