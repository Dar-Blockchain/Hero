import React from 'react'
import { useParams } from 'react-router-dom';
import { MobilizerData } from '../../Mobilizer_information';
import { useEffect } from 'react';
import { useState } from 'react';
import mobilizers from '../../Assets/HERO Brand Assets/Logo_bluepng.png'
import "./Profile.css"
import dot from '../../Assets/HERO Brand Assets/bluedot.png'
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
        console.log(users)
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

  function closeVcd(e) {
    e.preventDefault();
    setvcDropdown(false)
  }


  const btnProfile = (e) => {
    e.preventDefault();
    window.location.replace(e.target.name)
  } 





  function campHandler(e) {
    e.preventDefault();
    setcmpDropdown(true)
  }

  function closeCamp(e) {
    e.preventDefault();
    setcmpDropdown(false)
  }




  return (
    <div className="container-fluid ">
      {cmpdropdown === true &&
          <Campaigns profileCmp={profile.TopCampaigns} />

      }

      {vcdropdown === true &&
        <Victories ProfileVc={profile.Victories}/>
      }



      {(cmpdropdown === false && vcdropdown === false)  &&
        <div className="container d-flex flex-column align-items-center Profile">


          <img src={mobilizers} id="logo" />
          {profile && (
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <div className="hero-card d-flex">
                <span id={"Profile" + profile.id}></span>
                <div className='d-flex flex-column'>
                  <span className="d-flex"><h5 className='profileName'>{profile.name}</h5> <img className='dot' src={dot} /></span>
                  <p className='locationHighlight'>{profile.LocationHighlight}</p>
                  <p className='profileDescription'>{profile.profileDescription}</p>
                  <p className="smedia">{profile.sm}</p>
                </div>
              </div>
              {profile.id === "Julieta" ? (
                <div className="d-flex align-items-center justify-content-center" id={"Play" + profile.id}>
                  <img className="align-self-center" src={play} />
                </div>
              ) : ("")}

              <div className="tb row">
                <button onClick={campHandler} className="col-6 cmp">Campaigns</button>
                <button onClick={vcdHandler} className="col-6 vic">Victories</button>
              </div>
              <div className="ladesc w-100 d-flex flex-column align-items-center justify-content-center">
                <b>Launch is one month away!</b>
                <p>Take action on climate change by pledging to fund your favourite mobilizer upon launch.</p>
                <Link to={"/forum"} state={ {from: profile.name} }><button >Make a pledge</button></Link>
              </div>
              <div className="d-flex flex-column cause justify-content-center align-items-center">
                <h5 className="mx-auto">Works on same causes as</h5>
                <div className="row">
                  {users.map((user) =>
                   {if (user !== profile.name) {
                    return <button onClick={btnProfile} name={"/profile:" + user} className='col-5 mx-auto mt-2 causebtn'>{user}</button>
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
