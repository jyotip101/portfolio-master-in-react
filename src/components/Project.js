import React, { useState, useRef } from 'react'
import ProjectSingle from './ProjectSingle'
import { responsiveProject, reactProject, apiProject } from './ProjectData'

const Project = () => {
  const [resProject, setResProject] = useState(reactProject)
  const [reactActive, setReactActive] = useState(true)
  const [apiActive, setApiActive] = useState(false)
  const [responsiveActive, setResponsiveActive] = useState(false)

  const projectHandler = (project) => {
    if (project === 'react') {
      setResProject(reactProject)

      if (reactActive) {
        setApiActive(false)
        setResponsiveActive(false)
      } else {
        setReactActive(true)
      }
    }
    if (project === 'responsive') {
      setResProject(responsiveProject)
      if (responsiveActive) {
        setApiActive(false)
        setReactActive(false)
      } else {
        setResponsiveActive(true)
      }
    }
    if (project === 'api') {
      setResProject(apiProject)
      if (apiActive) {
        setReactActive(false)
        setResponsiveActive(false)
      } else {
        setApiActive(true)
      }
    }
  }

  return (
    <>
      <section className='project-contant project-grid'>
        <div className='project-center'>
          <div className='header-contant'>
            <h1 className='title'>Project</h1>
            <ul className='links' id='links'>
              <button
                className={`link ${reactActive ? 'active' : 'notActive'}`}
                onClick={() => projectHandler('react')}
              >
                React
              </button>
              <button
                className={`link ${
                  responsiveActive ? '  active' : 'notActive'
                }`}
                onClick={() => projectHandler('responsive')}
              >
                Responsive
              </button>
              <button
                className={`link ${apiActive ? 'active' : 'notActive'}`}
                onClick={() => projectHandler('api')}
              >
                API
              </button>
            </ul>
          </div>
          <div className='project-cards'>
            <div className='project-width'>
              {resProject.map((item) => {
                return <ProjectSingle key={item.id} item={item} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
