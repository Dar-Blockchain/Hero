import React from 'react'
import vicdot from '../../../Assets/HERO Brand Assets/Group 307.svg'

const Victories = (ProfileVc) => {
  const closeHandler = (e) => {
    e.preventDefault();
    window.location.reload()
    
  }
  return (
    <div className="container Victories d-flex flex-column">
    <button className="closebtn align-self-end" onClick={closeHandler} >X</button>
    <h5 className="ccmp mx-auto">Victories</h5>
    {/* {profile ? (
      profile.TopCampaigns.map((value, index) =>{
        <p>
          
        </p>
      })
  ):("")} */}
    <div className='d-flex flex-column justify-content-center align-items-center' >
      <div className='d-flex flex-column justify-content-center cmpcard'>
        <div className="d-flex">
          <img src={vicdot} className="col-1" />

          <b className="cmp-title col-10 mx-auto">Chilean Women Creating Future </b>
        </div>
        <small className="cmp-subtitle col-9 mx-auto">Chile’s Country Brand</small>
        <p className="cmp-t col-9 mx-auto">Completed</p>
        <p className="cmp-p col-9 mx-auto">
          Portrayed as one of Chilean women creating future for Chile and the world with their talent.
        </p>

      </div>
      <div className='d-flex flex-column justify-content-center'>
        <span className="d-flex">
          <img src={vicdot} className="col-1" />
          <b className="cmp-title col-10 mx-auto">Tedx Speaker</b>
        </span>
        <small className="cmp-subtitle col-9 mx-auto">TED</small>
        <p className="cmp-t col-9 mx-auto">In progress</p>
        <p className="cmp-p col-9 mx-auto">
          Girls' education is a climate solution.
          In her talk, emphasis is placed on the importance and role of girls' education, considering various factors that today can have an impact on our society, along with various changes that we can adopt to reduce the gaps that exist in the world.
        </p>

      </div>
      <div className='d-flex flex-column justify-content-center'>
        <span className="d-flex">
          <img src={vicdot} className="col-1" />
          <b className="cmp-title col-10 mx-auto">Assigned as Ambassador</b>
        </span>
        <small className="cmp-subtitle col-9 mx-auto">Ashoka Foundation</small>
        <p className="cmp-t col-9 mx-auto">Completed</p>
        <p className="cmp-p col-9 mx-auto">
          Recognized as one of the world's leading social entrepreneurs raising awareness on climate change and gender equality.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Victories
