import React from 'react'
import { hobbiesData } from './Data'

const Hobbies = () => {
  return (
    <>
      <section className='hobbies hobbies-fit'>
        <div className='hobbies-center'>
          <h1 className='title'>Hobbies</h1>
          {hobbiesData.map((item) => {
            const { id, title, img } = item
            return (
              <div key={id} className='hobbies-contant'>
                <div className='img-contant'>
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hobbies
