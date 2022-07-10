import React from 'react'
import logo from "../../Assets/HERO Brand Assets/logo.png"
import "./pledgeForum.css"
import play from "../../Assets/HERO Brand Assets/Group 308.svg"
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const PledgeForum = () => {
  const [forum, setForum] = useState(0);
  const locations = useLocation();

  const [inputState, setInput] = useState({
        Full_Name: "",
        Email: "",
        Birth_date: "",
        City: "",
        ExitesYouHero: [],
        climatesChanges: [],
        MonthlySubs: ""
    })



    const handleClick = (e) => {
      if (e.target.name === "climatesChanges"){
        setInput({
          ...inputState,
          [e.target.name]: [...inputState.climatesChanges, e.target.innerText],
        })
      }

      if (e.target.name === "ExitesYouHero") {
        setInput({
          ...inputState,
          [e.target.name]: [...inputState.ExitesYouHero, e.target.innerText],
        })
      }
    }

    const handleChange = (e) => {
      setInput({
        ...inputState,
        [e.target.name]: e.target.value
    })
    
    }

      const handleRequest = (e) => {
        axios.post(`https://hegemony.donftify.digital:8080/InserData`,
        inputState
        ).then(res => {
          console.log(res.data)
          setForum(4)
        }).catch(err => {
          console.log(err)
          setForum(2)}) 
      }





  return (
    <div className='pledgeForum container d-flex flex-column px-4 py-5 justify-content-center'>
      <button className="closebtn align-self-end" >X</button>
      
      {forum === 0 &&  
      (<div className="d-flex flex-column justify-content-center align-items-center my-auto "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What monthly subscription amount are you willing to pledge to this mobilizer?
        </p>
        <input name='MonthlySubs' onChange={handleChange} className="inputcash" type="number" placeholder="€ 20"/>
        <button onClick={() => setForum(1)} className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>
        <p className="p-end">We will let you know as soon as HERO is officially launched. You will then be part of the first HERO Supporters  in the world.</p>

      </div>
      )} 


    {forum === 1 && 
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
      <img id='logo' src={logo} srcSet={logo} alt="logo" />
      <p className="p-headline">
      Which aspects of climate change concern you the most?        
      </p>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m">Drought (water scarcity)</button>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m w my-4">Severe weather/natural disasters</button>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m l">Social unrest (due to worsened economic conditions, food scarcity, etc.)</button>

      <button onClick={() => setForum(2)} className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>
    </div>
    }

    {forum === 2 &&
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What excites you more about HERO?</p>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m">The ability to contribute directly to a climate mobilizer</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m w mt-4">Having a vote on the governance and future of HERO</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m w my-4">Getting direct feedback on the actions of the mobilizer</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m l">Access exclusive rewards and experiences from sustainable brands and partners</button>

        <button onClick={() => setForum(3)} className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>
      </div>

        }



{/* Contact */}

        {forum === 3 &&
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <form claforumssName="d-flex flex-column align-self-center align-items-center justify-content-center">        
        <label>
          <h6>Your Name</h6>
          <input type="text" name='Full_Name' onChange={handleChange} placeholder="Full Name" />
        </label>
        <label>
        <h6>Email</h6>
          <input type="text" name='Email' onChange={handleChange} placeholder="Your email adresss" />
        </label>
        <label>
        <h6>Birth Date</h6>
          <input type="text" name='Birth_date' onChange={handleChange} placeholder="Your Birth Date" />
        </label>
        <label>
        <h6>City</h6>
          <input type="text" name='City' onChange={handleChange} placeholder="Your City" />
        </label>
      </form>
      <button onClick={handleRequest}  className="btn-c-m w my-4">Become a HERO Supporter</button>

      </div>
      }

      
      {forum === 4 && 
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <h6 className="wtc">Welcome to the future of climate action!</h6>
      </div>
    }





    </div>
  )
}

export default PledgeForum
