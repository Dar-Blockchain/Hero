import React from 'react'
import { MobilizerData } from '../../../Mobilizer_information';
import personn from '../../../Assets/HERO Brand Assets/Group 2.svg'
import leaf from '../../../Assets/HERO Brand Assets/Group 1.svg'
import "./Campaigns.css"
const Campaigns = ({profileCmp}) => {
  const closeHandler = (e) => {
    e.preventDefault();
    window.location.reload()
    
  }
  
  return (
    <div className="container TopCampaigns d-flex flex-column">
          <button onClick={closeHandler} className="closebtn align-self-end" >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
          <h4 className="align-self-center title">Current Campaigns</h4>
          <div className='d-flex flex-column justify-content-center align-items-center' >
          {profileCmp && 
            profileCmp.map((value, index) =>


               <div key={index} className='d-flex justify-content-around' id={"cmpcard" + index}>
                <span className="">
                  {
                    index === 2 ? (<img src={leaf} className="icon-leaf" />):(<img src={personn} className="icon-person" />)
                  }
                
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
            )
          } 
          </div>



        </div>

  )
}

export default Campaigns
