import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import whiteLogo from "./Assets/explantionPageAssets/Group 520(1).svg";
import fHero from "./Assets/explantionPageAssets/Anuna_HomePage 1(1).svg";
import sHero from "./Assets/explantionPageAssets/Group 808.svg";
import blueLogo from "./Assets/explantionPageAssets/Group 520(2).svg";
import bluePoly from "./Assets/explantionPageAssets/Group 810.svg";
import nextBtn from "./Assets/explantionPageAssets/Group 806.svg"
function App() {

  const [pageState, setPage] = useState('first');

  const nextPage = ((e) => {
    // next page handler
    e.preventDefault();
    if (e.target.name === "second")
    {
      document.querySelector(".App").style.background = "#F5F5F5";
      document.querySelector(".App").style.justifyContent = "flex-start";
      document.querySelector(".App").style.paddingTop = "32px";
      document.querySelector(".App").style.color = "#0000FF";
      console.log("hola" + e.target.name)
    }

    if (e.target.name === "last")
    {
      document.querySelector(".App").style.justifyContent = "center";
      document.querySelector(".App").style.background = "linear-gradient(180deg, #0000FF 0%, #FFFFFF 131.8%)";


    }
    setPage(e.target.name);


  })



  return (
    <div className="App container-sm d-flex flex-column align-items-center">
      {pageState === "first" &&

        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={whiteLogo} className="logo" />
          <img src={fHero} id="fHero" />
          <small className="f-t">
            Anuna de Wever<br />
            HERO Supporter / Belgium
          </small>
          <p className="hero-headline">Do you want to do more<br/> for the climate but just don’t know how?</p>
          <button name="second" onClick={nextPage} className="btn-hero">Click here if you want do more</button>
          <p className="hero-f-p">
            Stanford Social Innovation Review estimates that funding climate mobilizers can be 100x more efficient on reducing carbon emissions than buying carbon credits.
          </p>
        </div>
      }


      {pageState === "second" &&
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={blueLogo} className="logo" />
          <img src={sHero} className="sHero" />
          <small className="s-t">
            Jessica Kleczka<br />
            HERO Mobilizer / UK
          </small>
          <p className="hero-t-headline">
            Climate mobilizers<br/>
            are the ones that are<br/>
            driving change NOW:
          </p>
          <ul>
            <li>
              <img src={bluePoly} />
              <p>
              They shift
              public narratives. 
              </p>
            </li>
            <li>
              <img src={bluePoly} />
              <p>
              They directly address climate<br/> policy with decision makers.
              </p>
            </li>
            <li>
              <img src={bluePoly} />
              <p>
              This is one of the most<br/>
              important jobs of our time<br/>
              and it’s not being paid.
              </p>
            </li>
          </ul>

          <button name="last" id='nextBtn' onClick={nextPage}>
            <img name="last" src={nextBtn} />
          </button>

        </div>
      }
      {pageState === "last" &&
                  <div className="d-flex flex-column justify-content-center align-items-center">
                      <img src={whiteLogo} className="logo" />
                      <p className='hero-headline-last'>
                      The first crowdfunding platform<br/> providing a Basic Income for<br/> climate mobilizers with the most<br /> impact on policy today.
                      </p>
                      <Link to="/supporter"><button className="btn-hero">Click here if you want do more</button></Link>
                  </div>
      }
    </div>

  );
}

export default App;
