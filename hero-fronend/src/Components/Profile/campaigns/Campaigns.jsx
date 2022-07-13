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
    <>

    <div className="container TopCampaigns d-flex flex-column">
          <button onClick={closeHandler} className="closebtn align-self-end">X</button>
          <h5 className="ccmp text-white align-self-center">Current Campaigns</h5>
          <div className='d-flex flex-column justify-content-center align-items-center' >
          {profileCmp && 
            profileCmp.map((value, index) =>
              <>

               <div key={index} className='d-flex flex-column justify-content-center cmpcard' id={"cmpcard" + index}>
                <span className="d-flex">
                  {
                    index === 2 ? (<img src={leaf} className="col-1 icon-p" />):(<img src={personn} className="col-1 icon-p" />)
                  }
                
                <b className="cmp-title col-9 mx-auto">{value.title}</b>
                </span>
                <small className="cmp-subtitle col-9 mx-auto">{value.campaign}</small>
                <p className="cmp-t col-9 mx-auto">{value.status}</p>
                <p className="cmp-p col-9 mx-auto">
                {value.desc}                
                </p>
              </div>
              </>
            )
          } 
          </div>



        </div>

    </>
  )
}

export default Campaigns
