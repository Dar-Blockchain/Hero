import React from 'react'
import logo from "../../Assets/HERO Brand Assets/logo.png"
import "./pledgeForum.css"
import play from "../../Assets/HERO Brand Assets/Group 308.svg"
const PledgeForum = () => {
  return (
    <div className='pledgeForum container d-flex flex-column px-4 py-5 justify-content-center'>
      <button className="closebtn align-self-end">X</button>
      <div className="d-flex flex-column justify-content-center align-items-center my-auto "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What monthly subscription amount are you willing to pledge to this mobilizer?
        </p>
        <input className="inputcash" type={"text"} placeholder="€ 20"/>
        <button className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>
        <p className="p-end">We will let you know as soon as HERO is officially launched. You will then be part of the first HERO Supporters  in the world.</p>

      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        Which aspects of climate change concern you the most?        
        </p>
        <button className="btn-c-m">Drought (water scarcity)</button>
        <button className="btn-c-m w my-4">Severe weather/natural disasters</button>
        <button className="btn-c-m l">Social unrest (due to worsened economic conditions, food scarcity, etc.)</button>

        <button className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What excites you more about HERO?</p>
        <button className="btn-c-m">The ability to contribute directly to a climate mobilizer</button>
        <button className="btn-c-m w mt-4">Having a vote on the governance and future of HERO</button>
        <button className="btn-c-m w my-4">Getting direct feedback on the actions of the mobilizer</button>
        <button className="btn-c-m l">Access exclusive rewards and experiences from sustainable brands and partners</button>

        <button className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>
      </div>





{/* Contact */}
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <form className="d-flex flex-column align-self-center align-items-center justify-content-center">        
        <label>
          <h6>Your Name</h6>
          <input type="text" placeholder="Full Name" />
        </label>
        <label>
        <h6>Email</h6>
          <input type="text" placeholder="Your email adresss" />
        </label>
        <label>
        <h6>Birth Date</h6>
          <input type="text" placeholder="Your Birth Date" />
        </label>
        <label>
        <h6>City</h6>
          <input type="text" placeholder="Your City" />
        </label>
        <button  className="btn-c-m w my-4">Become a HERO Supporter</button>
      </form>
      </div>




      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <h6 className="wtc">Welcome to the future of climate action!</h6>
      </div>






    </div>
  )
}

export default PledgeForum
