import React from 'react'
import { blogData } from './Data'

const Blog = () => {
  const { desc, imgUrl, title } = blogData

  return (
    <>
      <section className='blog blog-grid'>
        <div className='blog-center'>
          <h1 className='title'>Blog</h1>
          <div className='blog-contant'>
            <img src={imgUrl} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
