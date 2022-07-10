import React from 'react'
import logo from './Assets/HERO Brand Assets/Logo_bluepng.png'
import './Supporter.css'
import mobilizersLogowhite from './Assets/MobilizersPhotos/mobilizersLogowhite.svg'
import ProfilesList from './Components/ProfilesList/ProfilesList'
import { useState } from 'react'

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

   
    <div className='Supporter d-flex flex-column align-items-center'>
      {Dropdown === "on" && 
            <div className='hero-dropdown container-fluid'>
            <div className='row flex-column'>
            <button onClick={closeDropdown} className='close align-self-end'>X</button>
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
            <img src={logo} alt="Hero Logo Blue" srcSet={logo} className='blueLogo' />
            <div className='Card d-flex justify-content-center align-items-center browse-p'><p>Browse the first HERO Mobilizers with a verified track record on climate action.</p></div>
            <button className='ds-h' onClick={handleDropdown}>Discover how HERO Mobilizers are verified</button>
            <p className='co-p'>Click on the mobilizers to see their profiles.</p>
            <ProfilesList/>
      
            </div>
      }

    </div>
    </div>
  )
}

export default Supporter
