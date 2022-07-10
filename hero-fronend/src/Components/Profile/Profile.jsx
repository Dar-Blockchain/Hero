import React from 'react'
import { useParams } from 'react-router-dom';
import { MobilizerData } from '../../Mobilizer_information';
import { useEffect } from 'react';
import { useState } from 'react';
import mobilizers from '../../Assets/HERO Brand Assets/Logo_bluepng.png'
import "./Profile.css"
import dot from '../../Assets/HERO Brand Assets/bluedot.png'
import play from '../../Assets/HERO Brand Assets/Play.svg'
const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [profileImage, setProfileImage] = useState();
  useEffect(() => {
    if (!profile){
      MobilizerData.map((value, index) => {
        if (value.name == id.substring(1)){
          setProfile(value)
          setProfileImage(value.imagePath)
        }
      })
    }
  })
  return (
    <div className="container d-flex flex-column align-items-center Profile">
      <img src={mobilizers} id="logo"/>
      {profile ? (
        <div>
      <div className="hero-card d-flex">
          <span id={"Profile" + profile.id}></span>
          <div className='d-flex flex-column'>
          <span className="d-flex"><h5 className='profileName'>{profile.name}</h5> <img className='dot' src={dot}/></span>
          <p className='locationHighlight'>{profile.LocationHighlight}</p>
          <p className='profileDescription'>{profile.profileDescription}</p>
          <p className="smedia">{profile.instagram}</p>
          </div>
          </div>
          {profile.id === "Julieta" ? (
          <div className="d-flex align-items-center justify-content-center" id={"Play"+ profile.id}>
            <img className="align-self-center" src={play} />
          </div>
        ):("")}

        <div className="tb row">
            <button className="col-6 cmp">Campaigns</button>
            <button className="col-6 vic">Victories</button>
        </div>
        <div className="ladesc d-flex flex-column align-items-center justify-content-center">
          <b>Launch is one month away!</b>
          <p>Take action on climate change by pledging to fund your favourite mobilizer upon launch.</p>
          <button>Make a pledge</button>
        </div>
        <div className="d-flex flex-column cause justify-content-center align-items-center">
          <h5 className="mx-auto">Works on same causes as</h5>
            <div className="row">
              <button className='col-5 mx-auto causebtn'>Juan Sierra</button>
              <button className='col-5 mx-auto causebtn'>Jessica Klezcka</button>
              <button className='col-6 mx-auto causebtn last'>Elijah Mckenzie</button>
            </div>

        </div>
      </div>



      ):(<h1>Hollaaaaa</h1>)}




    </div>
  )
}

export default Profile
