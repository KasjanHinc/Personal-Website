import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { MediaQuery } from '../MediaQuery'
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faDatabase, faSatelliteDish } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faJsSquare, faReact, faGitSquare, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {

  const { mediaQuery, setMediaQuery } = useContext(MediaQuery)

  const delays = [200, 400, 600, 800, 1000]
  const svgAnim = ['skill-svg skill-svg-v1', 'skill-svg skill-svg-v2', 'skill-svg skill-svg-v3']

  const html = <FontAwesomeIcon icon={faHtml5} size="2x" />
  const css = <FontAwesomeIcon icon={faCss3} size="2x" />
  const js = <FontAwesomeIcon icon={faJsSquare} size="2x" />
  const react = <FontAwesomeIcon icon={faReact} size="2x" />
  const git = <FontAwesomeIcon icon={faGitSquare} size="2x" />
  const node = <FontAwesomeIcon icon={faNodeJs} size="2x" />
  const sql = <FontAwesomeIcon icon={faServer} size="2x" />
  const python = <FontAwesomeIcon icon={faPython} size="2x" />
  const nosql = <FontAwesomeIcon icon={faDatabase} size="2x" />
  const api = <FontAwesomeIcon icon={faSatelliteDish} size="2x" />


  return <div className="skills page" >

    <Tilt options={{ max: mediaQuery ? 0 : 35 }}>
      <div className="skills-container">

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{html}</div>
            <p id="skill-info" >HTML5, Forms</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{css}</div>
            <p id="skill-info">CSS3, SCSS, SASS, Bootstrap, Flexbox, Animations</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{js}</div>
            <p id="skill-info">JavaScript ES6, Mapbox GL, jQuery plugins</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{react}</div>
            <p id="skill-info">React, Hooks, JSX, Webpack, Router, Babel</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{git}</div>
            <p id="skill-info">Git, GitHub, Work flow, Project deployment</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{node}</div>
            <p id="skill-info">Node.js, Express, JSON web token, Axios, Bcrypt</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{sql}</div>
            <p id="skill-info">SQL, PostgreSQL, SQLAlchemy, Marshmallow</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{python}</div>
            <p id="skill-info">Python, Vanilla, Flask, Pipenv</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]} >{nosql}</div>
            <p id="skill-info">NoSQL, Mongoose, MongoDB</p>
          </div>
        </Fade>

        <Fade delay={delays[Math.floor(Math.random() * delays.length)]}>
          <div className="skill">
            <div className={svgAnim[Math.floor(Math.random() * svgAnim.length)]}>{api}</div>
            <p id="skill-info">API&apos;s, RESTFUL, JSON</p>
          </div>
        </Fade>


      </div >
    </Tilt>

  </div >




}

export default Skills