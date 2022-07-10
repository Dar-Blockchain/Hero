import React from 'react'

import { MobilizerData } from '../../Mobilizer_information.js'
import { Link } from 'react-router-dom'
import dot from '../../Assets/HERO Brand Assets/g4622.png'
import "./ProfilesList.css"
const ProfilesList = () => {
  return (
    <div>
        <ul className='d-flex flex-column align-self-center'>
    {MobilizerData.map((value, index) => {
        return (
            <li key={index} className='Card-w-bg' id={value.id + "Item"}>
            <Link className='mx-auto t-link ' to={{
                pathname: `/Profile:${value.name}`,
                }}>
                    
                  <div >
                      <span className='d-flex'><h3 className="card-headline">{value.name}</h3> <img src={dot} alt="hero" className='dot' /> </span>
                      <h6 className=''>{value.LocationHighlight}</h6>
                  </div>
            </Link>
            </li>
        )
      })}

{/*       
      
      <div className='Card-w-bg'>
          <Link to={'/Profile:Julieta'} id="9555" className='mx-auto t-link'>
              <div>
                  <span className='d-flex'><h3>Julieta Martinez</h3> <img src={dot} alt="hero" className='dot' /> </span>
                  <h6 className=''>Chile</h6>
              </div>
          </Link>
      </div>
    
      
          <div className='Card-w-bg'>
            <Link className='mx-auto t-link' to={'/Profile:Jessica'}>
              <div>
                  <span className='d-flex'><h3>Jessica Klezcka</h3> <img src={dot} alt="hero" className='dot' /> </span>
                  <h6 className=''>UK</h6>
              </div>
            </Link>
      </div>
     
      
      <div className='Card-w-bg'>
      <Link to={'/Profile:Juan'} className='mx-auto t-link'>
            <div >
                <span className='d-flex'><h3>Juan Sierra</h3> <img src={dot} alt="hero" className='dot' /> </span>
                <h6 className=''>Colombia</h6>
            </div>
            </Link>
      </div> */}
      
    </ul>
    </div>
  )
}

export default ProfilesList
