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
        e.currentTarget.classList.toggle('w');
      }

      if (e.target.name === "ExitesYouHero") {
        setInput({
          ...inputState,
          [e.target.name]: [...inputState.ExitesYouHero, e.target.innerText],
        })
        e.currentTarget.classList.toggle('w');
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

      const handleClose = (e) => {
        e.preventDefault()
        window.location.href = "/supporter"
      }




      const chooseAmount = (amount, e) => {
        setInput({
          ...inputState,
          ["MonthlySubs"]: amount
      })
      }

      const validateAction = (e, form) => {
        e.preventDefault();
        if(form === 1){
          if (!inputState.MonthlySubs) {
            return;
          }
          setForum(1)
        }

      }
 

  return (
    <div className='pledgeForum container d-flex flex-column px-4 py-5 justify-content-center'>
      <button onClick={handleClose} className="closebtn align-self-end" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
      
      
      {forum === 0 &&  
      (<div className="d-flex flex-column justify-content-center align-items-center my-auto "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What monthly subscription amount<br/> are you willing to pledge to this mobilizer ?
        </p>
        <p className="p-end">100% of the funds go directly to the mobilizers.</p>

        <button name='MonthlySubs' onClick={() => chooseAmount(10)} className="btn-c-m">€ 10</button>
      <button name='MonthlySubs' onClick={() => chooseAmount(20)} className="btn-c-m my-4">€ 20</button>
      <button name='MonthlySubs' onClick={() => chooseAmount(50)} className="btn-c-m">€ 50</button>
        <input name='MonthlySubs' onChange={handleChange} className="inputcash" type="number" placeholder="Other amount"/>
        <button onClick={(e) => validateAction(e, 1)} className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>

      </div>
      )} 


    {forum === 1 && 
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
      <img id='logo' src={logo} srcSet={logo} alt="logo" />
      <p className="p-headline">
      Which aspects of climate change concern you the most?        
      </p>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m">Drought (water scarcity)</button>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m my-4">Severe weather/natural disasters</button>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m l">Social unrest (due to worsened economic conditions, food scarcity, etc.)</button>

      <button onClick={() => setForum(2)} className="btn btn-transparent mt-4"><img src={play} srcSet={play} alt="submit" /></button>
    </div>
    }

    {forum === 2 &&
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What excites you more about HERO?</p>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m">The ability to contribute directly to a climate mobilizer</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m mt-4">Having a vote on the governance and future of HERO</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m my-4">Getting direct feedback on the actions of the mobilizer</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m l">Access exclusive rewards and experiences from sustainable brands and partners</button>

        <button onClick={() => setForum(3)} className="btn btn-transparent mt-4"><img src={play} srcSet={play} alt="submit" /></button>
      </div>

        }



{/* Contact */}

        {forum === 3 &&
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <form className="d-flex flex-column align-self-center align-items-center justify-content-center">        
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
        <h6 className="wtc">Welcome to the future<br/> of climate action!</h6>
      </div>
    }





    </div>
  )
}

export default PledgeForum
