import React from 'react'
import { useParams } from 'react-router-dom';
import { MobilizerData } from '../../Mobilizer_information';
import { useEffect } from 'react';
import { useState } from 'react';
import mobilizers from '../../Assets/HERO Brand Assets/Logo_bluepng.png'
import "./Profile.css"
import dot from '../../Assets/HERO Brand Assets/bluedot.png'
import speakerIcon from '../../Assets/HERO Brand Assets/speakerIcon.png'
import whitesmthn from '../../Assets/HERO Brand Assets/whitesmthn.svg'
import play from '../../Assets/HERO Brand Assets/Play.svg'
import Victories from './victories/victories';
import { Link } from 'react-router-dom';
import Campaigns from './campaigns/Campaigns';
const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [users, setUsers] = useState([]);
  const [cmpdropdown, setcmpDropdown] = useState(false);
  const [vcdropdown, setvcDropdown] = useState(false);

  useEffect(() => {
    if (!profile) {
      
      MobilizerData.map((value, index) => {
      if (index === 4) {return}
        setUsers(users => [...users, value.name])
        if (value.name == id.substring(1)) {
          setProfile(value)
        }

      })
    }
  })


  function vcdHandler(e) {
    e.preventDefault();
    setvcDropdown(true)
  }




  const btnProfile = (e) => {
    e.preventDefault();
    window.location.replace(e.target.name)
  } 





  function campHandler(e) {
    e.preventDefault();
    setcmpDropdown(true)
  }






  return (
    <div className="container-fluid ">
      {cmpdropdown === true &&
          <Campaigns profileCmp={profile.TopCampaigns} />

      }

      {vcdropdown === true &&
      
        <Victories profileVc={profile.Victories}/>
      }



      {(cmpdropdown === false && vcdropdown === false)  &&
        <div className="container d-flex flex-column align-items-center Profile pt-5">


          <Link to={"/"}><img src={mobilizers} id="logo" /></Link>
          {profile && (
            <div className="container d-flex flex-column justify-content-center align-items-center ">
              <div className="hero-card w-100 d-flex align-items-center">
                <span id={"Profile" + profile.id}></span>
                <div className='d-flex flex-column mb-0'>
                  <span className="d-flex ">
                    <h5 className='profileName mb-0'>{profile.name}</h5> 
                    <img className='dot' src={dot} />
                  </span>
                  <p className='locationHighlight mb-0'>{profile.LocationHighlight}</p>
                  <p className='profileDescription mb-0 col-11'>{profile.profileDescription}</p>
                  <p className="smedia">{profile.sm}</p>
                </div>
              </div>
              {profile.video && (
                <div className="d-flex align-items-center justify-content-center w-100 mt-4" id={"Play" + profile.id}>
                  <video id="background-video" controls={true} playsInline>
                    <source src={"assets/videos/"+profile.video} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="tb row">
                <button onClick={campHandler} className="col-6 cmp"><img src={speakerIcon} className="speakerIcon" /> Campaigns</button>
                <button onClick={vcdHandler} className="col-6 vic"><img src={whitesmthn} className="whitesmthn" />Victories</button>
              </div>
              <div className="ladesc w-100 d-flex flex-column align-items-center justify-content-center">
               
                <p> <b>Launch is one month away!</b> <br/>Join the waiting list to become one of the first HERO Supporters in the world.</p>
                <Link  className="join-hero-btn" to={"/forum"} state={ {from: profile.name} }><button>Click here to join HERO</button></Link>
              </div>
              <div className="d-flex flex-column cause justify-content-center align-items-center">
                <h5 className="mx-auto wt">Works on same causes as</h5>
                <div className="row">
                  {users.map((user) =>
                   {if (user !== profile.name) {
                    return <button onClick={btnProfile} name={"/profile:" + user} className='col-5 mx-auto causebtn'>{user}</button>
                   }}
                  )}
                  {/* <button className='col-6 mx-auto causebtn last'>Elijah Mckenzie</button> */}
                </div>

              </div>
            </div>



          )}


        </div>
      }


    </div>
  )
}

export default Profile
