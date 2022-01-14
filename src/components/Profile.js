import React from 'react'
import photo from '../img/photo.jpg'
const Profile = () => {
  return (
    <>
      <section className='profile-contant profile-fit'>
        <div className='profile-center'>
          <img src={photo} alt='photo' />
          <div className='desc'>
            <div className='name-contact'>
              <h1>
                Jyoti Patel <span>Front-end developer</span>
              </h1>
              <p>
                <span>
                  <i className='fas fa-envelope'></i>
                  jyotip99755@gmail.com
                </span>
                <span>
                  <i className='fas fa-phone-alt'></i>
                  (+91) 997 559 5443
                </span>
              </p>
            </div>
            <p className='decs-contant'>
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
