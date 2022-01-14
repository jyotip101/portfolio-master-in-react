import React, { useState } from 'react'
import ProjectSingle from './ProjectSingle'
import { responsiveProject } from './ProjectData'

const Project = () => {
  const [resProject, setResProject] = useState(responsiveProject)
  return (
    <>
      <section className='project-contant project-grid'>
        <div className='project-center'>
          <div className='header-contant'>
            <h1 className='title'>Project</h1>
            <ul className='links'>
              <li className='active'>React</li>
              <li>Responsive</li>
              <li>API</li>
            </ul>
          </div>
          <div className='project-cards'>
            {resProject.map((item) => {
              return <ProjectSingle key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
