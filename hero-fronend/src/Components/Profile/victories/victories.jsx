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
    <button className="closebtn align-self-end" onClick={closeHandler} >X</button>
    <h5 className="ccmp mx-auto">Victories</h5>
    <div className='d-flex flex-column justify-content-center align-items-center' >

  {profileVc &&
    profileVc.map((value, index) => 

        <div key={index} className='d-flex flex-column justify-content-center cmpcard'  id={"cmpcard" + index}>
          <span className="d-flex">
            <img src={vicdot} className="col-1 icon-p" />
            <b className="cmp-title col-10 mx-auto">{value.title}</b>
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
