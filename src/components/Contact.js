import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contact-contant'>
        <div className='contact-center'>
          <p className='top'>
            <a href='#home'>Top</a>
          </p>

          <div className='social'>
            <p className='icons'>
              <a
                href='https://github.com/jyotip101'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='fa fa-github' />
              </a>
              <a
                href='https://twitter.com/jyotipatil77100'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='fa fa-twitter' />
              </a>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <span className='fa fa-linkedin' />
              </a>
            </p>
            <p className='email'>jyotip99755@gmail.com</p>
            <p className='footer'>
              create by-
              <a
                href='https://twitter.com/jyotipatil77100'
                target='_blank'
                rel='noopener noreferrer'
              >
                jyoti-p
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
