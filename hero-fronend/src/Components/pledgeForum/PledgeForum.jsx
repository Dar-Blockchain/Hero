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
  const [error, setError] = useState(false)
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
          setForum(3)
        }).catch(err => {
          console.log(err)
          setForum(1)}) 
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
            setError(true)
            return;
          }
          setForum(1)
        }
        if(form === 2){
          if(!inputState.ExitesYouHero.length){
            setError(true)
            return;
          }
          setForum(2)
        }
        if(form === 3){
          if(!inputState.Birth_date || !inputState.City || !inputState.Email || !inputState.Full_Name){
            setError(true);
            return;
          }
          handleRequest();
        }

      }

      const backToForm = () => {
        setError(false)
      }
 

  return (
    <div className='pledgeForum container d-flex flex-column px-4 py-5 justify-content-center'>
      <button onClick={handleClose} className="closebtn align-self-end mb-2" style={{marginBottom: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
      
      
      {forum === 0 && !error && 
      (<div className="d-flex flex-column justify-content-center align-items-center my-auto "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What monthly subscription amount<br/> are you willing to pledge to this mobilizer ?
        </p>
        <p className="p-end">100% of the funds go directly to the mobilizers.</p>

        <button name='MonthlySubs' onClick={() => chooseAmount(10)} className="btn-c-m">€ 10</button>
      <button name='MonthlySubs' onClick={() => chooseAmount(20)} className="btn-c-m my-4">€ 20</button>
      <button name='MonthlySubs' onClick={() => chooseAmount(50)} className="btn-c-m">€ 50</button>
        {/*<input name='MonthlySubs' onChange={handleChange} className="inputcash" type="number" placeholder="Other amount"/>*/}
        <div class="input-group mt-4 mb-4">
          <input name='MonthlySubs' onChange={handleChange} type="number" placeholder="Other amount" className="form-control custom-input" aria-label="Amount (to the nearest dollar)"/>
          <div className="input-group-append">
            <span className="input-group-text">€</span>
          </div>
        </div>
        <button onClick={(e) => validateAction(e, 1)} className="btn btn-transparent"><img src={play} srcSet={play} alt="submit" /></button>

      </div>
      )} 


    {/*forum === 1 && !error && 
      <div className="d-flex flex-column justify-content-center align-items-center my-5 "> 
      <img id='logo' src={logo} srcSet={logo} alt="logo" />
      <p className="p-headline">
      Which aspects of climate change concern you the most?        
      </p>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m">Drought (water scarcity)</button>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m my-4">Severe weather/natural disasters</button>
      <button name='climatesChanges' onClick={handleClick} className="btn-c-m l">Social unrest (due to worsened economic conditions, food scarcity, etc.)</button>

      <button onClick={(e) => validateAction(e, 2)} className="btn btn-transparent mt-4"><img src={play} srcSet={play} alt="submit" /></button>
    </div>
      */}

    {forum === 1 && !error && 
      <div className="d-flex flex-column justify-content-center align-items-center my-auto "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        What excites you more about HERO?</p>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m">The ability to contribute directly to a climate mobilizer</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m mt-4">Having a vote on the governance and future of HERO</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m my-4">Getting direct feedback on the actions of the mobilizer</button>
        <button onClick={handleClick} name="ExitesYouHero" className="btn-c-m l">Access exclusive rewards and experiences from sustainable brands and partners</button>

        <button onClick={(e) => validateAction(e, 2)} className="btn btn-transparent mt-4"><img src={play} srcSet={play} alt="submit" /></button>
      </div>

        }



{/* Contact */}

        {forum === 2 && !error && 
      <div className="d-flex flex-column justify-content-center align-items-center my-auto "> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <p className="p-headline">
        Action is your power!
        </p>
        <p className="p-end">Please leave us your details so that we<br/> can send you a link for our launch!*</p>
        <form className="d-flex flex-column align-self-center align-items-center justify-content-center">        
        <label>
          <h6 className='justify-content-center'>Your Name</h6>
          <input type="text" name='Full_Name' onChange={handleChange} placeholder="John Doe" />
        </label>
        <label>
        <h6 className='justify-content-center'>Email</h6>
          <input type="text" name='Email' onChange={handleChange} placeholder=" john@doe.com" />
        </label>
        <label>
        <h6 className='justify-content-center'>Birth Date</h6>
          <input type="text" name='Birth_date' onChange={handleChange} placeholder="24/10/2022" />
        </label>
        <label>
        <h6 className='justify-content-center'>City</h6>
          <input type="text" name='City' onChange={handleChange} placeholder="Amsterdam" />
        </label>
        <div className="form-check mt-4">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
  I accept to receive emails from HERO.
  </label>
</div>
      </form>
      <button onClick={(e) => validateAction(e, 3)}  className="btn-c-m w my-4">Become a HERO Supporter</button>

      </div>
      }

      
      {forum === 3 && !error && 
      <div className="d-flex flex-column justify-content-center align-items-center center-position"> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <h6 className="wtc">Welcome to the future<br/> of climate action!</h6>
      </div>
    }
          {error && 
      <div className="d-flex flex-column justify-content-center align-items-center center-position"> 
        <img id='logo' src={logo} srcSet={logo} alt="logo" />
        <h6 className="wtc">Something went wrong :( <br/>
                      Please make sure the required <br/>
                          fields are completed. 
        </h6>
        <button onClick={backToForm} className="btn btn-transparent mt-4"><img src={play} srcSet={play} alt="submit" /></button>
      </div>
    }





    </div>
  )
}

export default PledgeForum
