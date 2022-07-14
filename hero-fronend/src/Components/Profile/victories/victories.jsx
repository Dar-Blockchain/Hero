import React from 'react'
import vicdot from '../../../Assets/HERO Brand Assets/Group 307.svg'
import "./victories.css"

const Victories = ({profileVc}) => {
  console.log(profileVc)
  const closeHandler = (e) => {
    e.preventDefault();
    window.location.reload()
  }

  
  return (
    <div className="container Victories d-flex flex-column">
    <button onClick={closeHandler} className="closebtn align-self-end" >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    <h5 className="align-self-center title">Victories</h5>
    <div className='d-flex flex-column justify-content-center align-items-center' >

  {profileVc &&
    profileVc.map((value, index) => 

        <div key={index} className='d-flex flex-column align-self-center'  id={"cmpcard" + index}>
          <div key={index} className='d-flex justify-content-around' id={"cmpcard" + index}>
                <span className="">
                  <img src={vicdot} className="icon-leaf" />                
                </span>
                <div className='d-flex flex-column align-self-center'>
                <b className="campaing-title">{value.title}</b>

                <small className="campaing-subtitle">{value.campaign}</small>
                <p className="campaing-status">{value.status}</p>
                <p className="col-11 campaing-desc">
                {value.desc}                
                </p>
                </div>
          </div>
        </div>
    )}
    </div>
  </div>
  )
}

export default Victories
