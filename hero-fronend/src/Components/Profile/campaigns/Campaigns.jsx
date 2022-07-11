import React from 'react'
import { MobilizerData } from '../../../Mobilizer_information';
import personn from '../../../Assets/HERO Brand Assets/Group 2.svg'
import leaf from '../../../Assets/HERO Brand Assets/Group 1.svg'
const Campaigns = (profileCmp) => {

  return (
    <>
    {/* onClick={closeCamp} */}
    <div className="container TopCampaigns d-flex flex-column">
          <button className="closebtn align-self-end">X</button>
          <h5 className="ccmp mx-auto">Current Campaigns</h5>
          <div className='d-flex flex-column justify-content-center align-items-center' >
          {profileCmp && 
            profileCmp.map((index, value) => {
                <div className='d-flex flex-column justify-content-center cmpcard'>
                <div className="d-flex">
                  <img src={personn} className="col-1" />

                  <b className="cmp-title col-10 mx-auto">{profileCmp.title}</b>
                </div>
                <small className="cmp-subtitle col-9 mx-auto">{profileCmp.campaign}</small>
                <p className="cmp-t col-9 mx-auto">{profileCmp.status}</p>
                <p className="cmp-p col-9 mx-auto">
                {profileCmp.desc}                
                </p>
              </div>
            })
          } 
          </div>



        </div>

    </>
  )
}

export default Campaigns
