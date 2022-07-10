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
        <p>We will let you know as soon as HERO is officially launched. You will then be part of the first HERO Supporters  in the world.</p>

      </div>
    </div>
  )
}

export default PledgeForum
