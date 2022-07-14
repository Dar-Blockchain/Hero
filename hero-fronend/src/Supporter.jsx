import React from 'react'
import logo from './Assets/HERO Brand Assets/Logo_bluepng.png'
import './Supporter.css'
import mobilizersLogowhite from './Assets/MobilizersPhotos/mobilizersLogowhite.svg'
import ProfilesList from './Components/ProfilesList/ProfilesList'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Supporter = () => {


  const [Dropdown, setDropdown] = useState("off");

  function handleDropdown(e) {
    setDropdown('on')
    e.preventDefault(); 
  }
  function closeDropdown(e) {
    setDropdown('off')
    e.preventDefault();
  }



  return (
    <div className="container-fluid">

   
    <div className='Supporter my-auto d-flex flex-column align-items-center pt-5'>
      {Dropdown === "on" && 
            <div className='hero-dropdown container-fluid d-flex flex-column justify-content-center align-items-center'>
              <button onClick={closeDropdown} className="closebtn align-self-end" >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </button>
            <div className='row flex-column'>
            <img  src={mobilizersLogowhite} srcSet={mobilizersLogowhite} className="mobilizersLogowhite" />
            </div>
            <div className='descc d-flex flex-column justify-content-center align-items-center'>
              
             <b>How we verify HERO Mobilizers :</b>  
    
              <p>HERO identifies publicly recognised climate movement leaders and campaigners.</p>
                
              <p>We verify their track record in successfully leading climate action with a focus on policy:</p>
                <ul>
                <li>No violence.</li> 
                <li>At least 1 victory in enacting change.</li> 
                </ul>           
              <p>These first mobilizers can then onboard other fellow mobilizers working on the same causes and campaigns to the platform, which are then verified by HERO, with the above criteria.</p>
                
              <b>Find more information on our verification process on the HERO FAQ.</b>
              
            </div>
          </div>
      }

      {Dropdown === "off" && 
            <div className="heroo container-fluid d-flex flex-column justify-content-center align-items-center">
            <Link to="/"><img src={logo} alt="Hero Logo Blue" srcSet={logo} className='blueLogo' /></Link>
            <div className='Card d-flex justify-content-center align-items-center browse-p'><p>Click on the first HERO Mobilizers to see their profiles and work.</p></div>
            <button className='ds-h' onClick={handleDropdown}>Discover how HERO Mobilizers are verified</button>
            <ProfilesList/>
            </div>
      }
    </div>
    </div>
  )
}

export default Supporter
