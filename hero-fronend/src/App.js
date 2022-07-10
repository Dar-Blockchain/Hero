import './App.css';
import maskGroup from './Assets/MobilizersPhotos/Mask_group.png';
import logo from './Assets/HERO Brand Assets/logo.png'
import { Link } from "react-router-dom";
import herodot from './Assets/HERO Brand Assets/g4622.png'
function App() {
  return (
    <div className="App container">
      <div className="d-flex flex-column align-items-center pt-5">
      <img alt='logo' src={logo} className="logo" />
      <img alt='women' className='women' src={maskGroup} srcSet={maskGroup} />
      <h1 className='headline'>
      Do you want to do more for the climate but just don’t know how?
      </h1>
      <p className='headline-desc my-1'>HERO gives you the power to take meaningful action in just 3 clicks by financing climate mobilizers around the world with the most impact on policy today. </p>

      <ul className='d-flex flex-column my-1 mb-4'>
        <li>
          <span className="d-flex flex-column">
          <img src={herodot} srcset={herodot} className="herodot mx-auto"/>
          <p className="mx-auto">No intermediaries</p>
          
          </span>
        </li>
      <li>
      <span className="d-flex flex-column">
      <img src={herodot} srcset={herodot} className="herodot mx-auto"/>
      <p className="mx-auto">Full transparency</p>
      </span>
        </li>
        <li>
        <span className="d-flex flex-column">
      <img src={herodot} srcset={herodot} className="herodot mx-auto"/>
      <p className="mx-auto">Vote on the future of HERO</p>
      </span>
        </li>
      </ul>

      <Link to='/supporter'> <button className='btn-hero'>Become a HERO Supporter</button></Link>
      </div>
    </div>

  );
}

export default App;
