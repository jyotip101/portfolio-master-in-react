import React from 'react'

const ProjectSingle = ({ item }) => {
  const { id, imgUrl, sourceCode, demo, title, description, language } = item
  return (
    <>
      <div className='card'>
        <div className='img-contant'>
          <img src={imgUrl} alt={title} />
        </div>
        <p className='tags'>
          {language.map((lang, index) => {
            return <span key={index}>#{lang}</span>
          })}
        </p>
        <h4 className='title'>{title}</h4>
        <p className='desc'>{description}</p>
        <div className='btn-contant'>
          <button className='btn'>Demo</button>
          <button className='btn'>Code</button>
        </div>
      </div>
    </>
  )
}

export default ProjectSingle
