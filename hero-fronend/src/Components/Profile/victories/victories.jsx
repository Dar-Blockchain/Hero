import React from 'react'
import vicdot from '../../../Assets/HERO Brand Assets/Group 307.svg'

const Victories = ({profileVc}) => {
  console.log(profileVc)
  const closeHandler = (e) => {
    e.preventDefault();
    window.location.reload()
  }

  
  return (
    <div className="container Victories d-flex flex-column">
    <button onClick={closeHandler} className="closebtn align-self-end" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    <h5 className="ccmp mx-auto">Victories</h5>
    <div className='d-flex flex-column justify-content-center align-items-center' >

  {profileVc &&
    profileVc.map((value, index) => 

        <div key={index} className='d-flex flex-column justify-content-center cmpcard'  id={"cmpcard" + index}>
          <span className="d-flex">
            <img src={vicdot} className="col-1 icon-p" />
            <b className="cmp-title col-9 mx-auto">{value.title}</b>
          </span>
          <small className="cmp-subtitle col-9 mx-auto">{value.campaign}</small>
          <p className="cmp-t col-9 mx-auto">{value.status}</p>
          <p className="cmp-p col-9 mx-auto">
            {value.desc}
          </p>
        </div>
      
    )}
    </div>
  </div>
  )
}

export default Victories
