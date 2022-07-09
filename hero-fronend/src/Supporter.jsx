import React from 'react'
import logo from './Assets/HERO Brand Assets/Logo_bluepng.png'
import './Supporter.css'
import cardBg1 from './Assets/MobilizersPhotos/Elijah Mckenzie.jpg'
import dot from './Assets/HERO Brand Assets/g4622.png'

const Supporter = () => {
  return (
    <div className='Supporter d-flex flex-column align-items-center'>
      <img src={logo} alt="Hero Logo Blue" srcSet={logo} className='blueLogo' />
      <div className='Card d-flex justify-content-center align-items-center'><p>Browse the first HERO Mobilizers with a verified track record on climate action.</p></div>
      <button className='ds-h'>Discover how HERO Mobilizers are verified</button>
      <p className='co-p'>Click on the mobilizers to see their profiles.</p>
      
      <ul className='d-flex flex-column align-self-center'>
        <div className='Card-w-bg'>
              <div className='mx-auto'>
                  <span className='d-flex'><h3>Elijah Mckenzie</h3> <img src={dot} alt="hero" className='dot' /> </span>
                  <h6 className=''>UK</h6>
              </div>
        </div>
        <div className='Card-w-bg'>
              <div className='mx-auto'>
                  <span className='d-flex'><h3>Elijah Mckenzie</h3> <img src={dot} alt="hero" className='dot' /> </span>
                  <h6 className=''>UK</h6>
              </div>
        </div>

                <div className='Card-w-bg'>
              <div className='mx-auto'>
                  <span className='d-flex'><h3>Elijah Mckenzie</h3> <img src={dot} alt="hero" className='dot' /> </span>
                  <h6 className=''>UK</h6>
              </div>
        </div>
        <div className='Card-w-bg'>
              <div className='mx-auto'>
                  <span className='d-flex'><h3>Elijah Mckenzie</h3> <img src={dot} alt="hero" className='dot' /> </span>
                  <h6 className=''>UK</h6>
              </div>
        </div>
      </ul>
    </div>
  )
}

export default Supporter
