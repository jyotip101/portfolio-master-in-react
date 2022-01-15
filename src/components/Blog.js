import React from 'react'
import { blogData } from './Data'

const Blog = () => {
  const { desc1, desc2, imgUrl, title } = blogData

  return (
    <>
      <section className='blog blog-grid'>
        <div className='blog-center'>
          <h1 className='title'>Blog</h1>
          <div className='blog-contant'>
            <img src={imgUrl} alt={title} />
            <h3>{title}</h3>
            <p>{desc1}</p>
            <p>{desc2}</p>
            <a
              href='https://how-to-add-icons-and-images-in-input-elements-using-css.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              how-to-add-icons-and-images-in-input-elements-using-css
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
