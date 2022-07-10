import React from 'react'
import { useParams } from 'react-router-dom';
import { MobilizerData } from '../../Mobilizer_information';
import { useEffect } from 'react';
import { useState } from 'react';
import mobilizers from '../../Assets/HERO Brand Assets/Logo_bluepng.png'
import "./Profile.css"
import dot from '../../Assets/HERO Brand Assets/bluedot.png'
import play from '../../Assets/HERO Brand Assets/Play.svg'
import personn from '../../Assets/HERO Brand Assets/Group 2.svg'
import leaf from '../../Assets/HERO Brand Assets/Group 1.svg'
import { Link } from 'react-router-dom';
import vicdot from '../../Assets/HERO Brand Assets/Group 307.svg'
const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState();
  const [cmpdropdown, setcmpDropdown] = useState(false);
  const [vcdropdown, setvcDropdown] = useState(false);

  useEffect(() => {
    if (!profile) {
      MobilizerData.map((value, index) => {
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
        <div className="container TopCampaigns d-flex flex-column">
          <button className="closebtn align-self-end" onClick={closeCamp}>X</button>
          <h5 className="ccmp mx-auto">Current Campaigns</h5>
          {/* {profile ? (
            profile.TopCampaigns.map((value, index) =>{
              <p>
                
              </p>
            })
        ):("")} */}
          <div className='d-flex flex-column justify-content-center align-items-center' >
            <div className='d-flex flex-column justify-content-center cmpcard'>
              <div className="d-flex">
                <img src={personn} className="col-1" />

                <b className="cmp-title col-10 mx-auto">Adolescent Empowerment</b>
              </div>
              <small className="cmp-subtitle col-9 mx-auto">Tremendas Foundation</small>
              <p className="cmp-t col-9 mx-auto">In progress</p>
              <p className="cmp-p col-9 mx-auto">
                Promoting the empowerment of adolescents and young people by inviting them to put their skills and talents at the service of the community to generate social impact.
              </p>

            </div>
            <div className='d-flex flex-column justify-content-center'>
              <span className="d-flex">
                <img src={personn} className="col-1" />
                <b className="cmp-title col-10 mx-auto">Youth Task Force</b>
              </span>
              <small className="cmp-subtitle col-9 mx-auto">UN Women</small>
              <p className="cmp-t col-9 mx-auto">In progress</p>
              <p className="cmp-p col-9 mx-auto">
                Leadership and youth participation in the next Generation Equality Forum, a global meeting focused on civil society for gender equality.          </p>

            </div>
            <div className='d-flex flex-column justify-content-center'>
              <span className="d-flex">
                <img src={leaf} className="col-1" />
                <b className="cmp-title col-10 mx-auto">International Network of Young Latin American Activists</b>
              </span>
              <small className="cmp-subtitle col-9 mx-auto">Latinas for Climate</small>
              <p className="cmp-t col-9 mx-auto">In progress</p>
              <p className="cmp-p col-9 mx-auto">
                Latinas for Climate seeks to raise awareness about the climate crisis with a gender, Human Rights and Latin perspective, in order to educate girls, young people and women in the region on this issue so that they become empowered and begin to take action for a better future.
              </p>

            </div>
          </div>



        </div>

      }

      {vcdropdown === true &&
        <div className="container Victories d-flex flex-column">
          <button className="closebtn align-self-end" onClick={closeVcd}>X</button>
          <h5 className="ccmp mx-auto">Victoriess</h5>
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
      }



      {(cmpdropdown === false && vcdropdown === false)  &&
        <div className="container d-flex flex-column align-items-center Profile">


          <img src={mobilizers} id="logo" />
          {profile && (
            <div>
              <div className="hero-card d-flex">
                <span id={"Profile" + profile.id}></span>
                <div className='d-flex flex-column'>
                  <span className="d-flex"><h5 className='profileName'>{profile.name}</h5> <img className='dot' src={dot} /></span>
                  <p className='locationHighlight'>{profile.LocationHighlight}</p>
                  <p className='profileDescription'>{profile.profileDescription}</p>
                  <p className="smedia">{profile.instagram}</p>
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
              <div className="ladesc d-flex flex-column align-items-center justify-content-center">
                <b>Launch is one month away!</b>
                <p>Take action on climate change by pledging to fund your favourite mobilizer upon launch.</p>
                <Link to="/forum"><button >Make a pledge</button></Link>
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



          )}


        </div>
      }


    </div>
  )
}

export default Profile
